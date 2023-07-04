import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class AppService {

  private redisClient: Redis

  constructor(){
    this.redisClient = new Redis({
      host: '127.0.0.1',
      port: 6379,
    });
  
  }

  async testConnection(): Promise<void> {

    await this.redisClient.set('myname', 'Dorin Puscasu');

    // Get the value held at key "myname" and log it.
    const value = await this.redisClient.get('myname');
    console.log(value);
  
  }
}
