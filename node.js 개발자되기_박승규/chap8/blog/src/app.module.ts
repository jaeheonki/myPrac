import { Module } from '@nestjs/common';
import { AppController } from './blog.controller';
import { AppService } from './blog.service';

@Module({
  imports: [],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule {}
