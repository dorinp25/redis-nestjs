import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';


@Injectable()
export class SubscribeService {

    private redisClient: Redis

    constructor() {
        this.redisClient = new Redis({
            host: '127.0.0.1',
            port: 6379,
        });

    }

    async subscribeToChannel(channel: string, callback: (message: string) => void): Promise<void> {
    
        await this.redisClient.subscribe(channel);
    
        this.redisClient.on('message', (ch, msg) => {
          if (ch === channel) {
            callback(msg);
          }
        });
      }
}
