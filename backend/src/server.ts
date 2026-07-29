import app from './app';
import { connectDB } from './config/db';
import { env } from './config/env';
import { User } from './models/user.model';
import { UserRole } from './constants/roles';

const startServer = async () => {
  try {
    await connectDB();

    // Auto-seed or Reset Super Admin Account
    let adminUser = await User.findOne({ email: 'admin@vigyapana.com' }).select('+password');
    if (!adminUser) {
      adminUser = await User.create({
        name: 'Super Admin',
        email: 'admin@vigyapana.com',
        password: 'AdminPassword123!',
        role: UserRole.SUPER_ADMIN,
        isActive: true
      });
      console.log('----------------------------------------------------');
      console.log('⚡ Super Admin Account Seeded Successfully!');
      console.log('   Email: admin@vigyapana.com');
      console.log('   Password: AdminPassword123!');
      console.log('----------------------------------------------------');
    } else {
      adminUser.password = 'AdminPassword123!';
      adminUser.isActive = true;
      adminUser.role = UserRole.SUPER_ADMIN;
      await adminUser.save();
      console.log('----------------------------------------------------');
      console.log('⚡ Super Admin Account Verified & Reset!');
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
