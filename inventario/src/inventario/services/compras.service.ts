import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ComprasService {
    constructor(
        @Inject('COMPRAS_SERVICE') private client: ClientProxy
    ) { }

    async enviarMensaje() {
        console.log('enviando mensaje');
        await firstValueFrom(this.client.send({ cmd: 'saludo'}, "Juan Perez"));
    }
}