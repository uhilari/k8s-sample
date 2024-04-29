import { Controller, Get, Post } from '@nestjs/common';
import { CompraService } from '../services/compra.service';

@Controller('compra')
export class CompraController {
    constructor (
        private svc: CompraService
    ) { }

    @Get()
    async Leer() {
        return {
            success: true,
            message: 'OK'
        }
    }

    @Post()
    async Crear() {
        const result = await this.svc.getStock();
        return {
            success: true,
            message: 'OK',
            data: result
        };
    }
}
