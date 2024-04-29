import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CompraService {
    constructor (
        private _http: HttpService
    ) { }

    async getStock() {
        const url = `${process.env.INVENTARIO_URL}/stock`;
        console.log(`llamando a '${url}'`);
        const result = await firstValueFrom(this._http.get(url));
        console.log('resultado', result);
        return result.data;
    }
}