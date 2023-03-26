import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(){
    return {
      healthcheck : "OK",
      status :"all system are up"
    };
  }
}
