import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscribeService } from './subscribe.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SubscribeService],
})
export class AppModule {}
