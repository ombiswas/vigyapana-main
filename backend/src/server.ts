import app from './app';
import { connectDB } from './config/db';
import { env } from './config/env';
import { User } from './models/user.model';
import { UserRole } from './constants/roles';

const startServer = async () => {
  try {
    await connectDB();

    // Auto-seed Initial Super Admin in Development if no users exist
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      await User.create({
        name: 'Super Admin',
        email: 'admin@vigyapana.com',
        password: 'AdminPassword123!',
        role: UserRole.SUPER_ADMIN,
        isActive: true
      });
      console.log('----------------------------------------------------');
      console.log('⚡ Initial Super Admin Seeded Successfully!');
      console.log('   Email: admin@vigyapana.com');
      console.log('   Password: AdminPassword123!');
      console.log('----------------------------------------------------');
    }

    const server = app.listen(env.PORT, () => {
      console.log(`🚀 Vigyapana API Engine listening on port ${env.PORT} [${env.NODE_ENV}]`);
    });

    const shutdown = () => {
      console.log('\n[Server] Graceful shutdown initiated...');
      server.close(() => {
        console.log('[Server] HTTP Server Closed.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  } catch (error) {
    console.error('[Server] Startup Fatal Error:', error);
    process.exit(1);
  }
};

startServer();
