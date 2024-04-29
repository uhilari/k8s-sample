import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({
    cmd: 'saludo'
  })
  getHello(nombre: string): string {
    console.log(`Llamado a message "saludo ${nombre}"`);
    return this.appService.getHello();
  }

  @EventPattern('compra-creada')
  compraCreada(data) {
    console.log('Llamado a event "compra-creada"', data)
    return {
      success: true,
      message: 'Se ha creado la compra'
    }
  }
}
