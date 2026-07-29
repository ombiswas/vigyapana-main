import mongoose from 'mongoose';
import dns from 'dns';
import { env } from './env';

// Set public DNS servers for Node.js SRV lookup on Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  // Fallback if DNS override fails
}

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI);
    console.log(`[Database] MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error('[Database] MongoDB Connection Error:', error);
    process.exit(1);
  }
};

mongoose.connection.on('disconnected', () => {
  console.warn('[Database] MongoDB Disconnected. Reconnecting...');
});

mongoose.connection.on('error', (err) => {
  console.error('[Database] Mongoose Connection Error:', err);
});
