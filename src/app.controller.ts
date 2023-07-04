import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SubscribeService } from './subscribe.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly subscribeService: SubscribeService,
    ) {}

  @Get('/test')
  async getHello() {
    await this.appService.testConnection();
  }


  @Get('/publish')
  async publishMessage(): Promise<void> {
    const  channel = 'mychannel';
    const message = `Hello from NestJS!`;
    await this.appService.publishMessage(channel, message);
  }

  @Get('/subscribe')
  async subscribeToChannel(): Promise<void> {
    const  channel = 'mychannel';
    await this.subscribeService.subscribeToChannel(channel, (message) => {
      console.log(`Received message: ${message}`);
    });
  }
}
