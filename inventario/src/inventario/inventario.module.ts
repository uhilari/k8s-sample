import { Module } from '@nestjs/common';
import { StockController } from './controllers/stock.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ComprasService } from './services/compras.service';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'COMPRAS_SERVICE',
        transport: Transport.NATS,
        options: { 
          servers: [process.env.NATS_SVR]
        }
      }
    ])
  ],
  controllers: [StockController],
  providers: [ComprasService]
})
export class InventarioModule {}
