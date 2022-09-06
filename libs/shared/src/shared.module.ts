import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [JwtAuthGuard, JwtStrategy],
  exports: [JwtAuthGuard],
})
export class SharedModule {}
