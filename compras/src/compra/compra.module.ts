import { Module } from '@nestjs/common';
import { CompraController } from './controllers/compra.controller';
import { CompraService } from './services/compra.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ HttpModule ],
  controllers: [CompraController],
  providers: [CompraService]
})
export class CompraModule {}
