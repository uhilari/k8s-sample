import { Controller, Get, Post } from '@nestjs/common';
import { ComprasService } from '../services/compras.service';

@Controller('stock')
export class StockController {
    constructor(
        private comprasSvc: ComprasService
    ) { }

    @Get()
    async Leer() {
        return {
            success: true,
            mensaje: 'OK'
        };
    }

    @Post()
    async Escribir() {
        await this.comprasSvc.enviarMensaje();
        return {
            success: true,
            mensaje: 'Enviado a cola'
        }
    }
}
