import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async (): Promise<void> => {
  if (isConnected && mongoose.connection.readyState === 1) {
    console.log('Using existing MongoDB connection');
    return;
  }

  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    await mongoose.connect(mongoURI);
    isConnected = true;
    console.log('MongoDB connected successfully');

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
      isConnected = false;
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    isConnected = false;
    throw error;
  }
};

export default connectDB;

