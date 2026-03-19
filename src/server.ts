import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

// ensure we load .env from project root, not relative to the compiled JS
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

console.log('Loaded environment from', envPath);
console.log('PORT =>', process.env.PORT);
console.log('MONGO_URI =>', process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || '3000';

if (!mongoUri) {
  console.error('❌ MONGO_URI environment variable is not set.');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => {
    console.error('❌ MongoDB Error:', err);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;