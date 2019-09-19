import { Injectable } from '@angular/core';
import { Cadastro} from './cadastro';
@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  cadastros: Cadastro[] = [];
  constructor() { }


  cadastrarCliente(cadastro: Cadastro)
  {
    console.log("Recebido no service:");
    console.log(cadastro);
    this.cadastros.push(cadastro);
    console.log(this.cadastros);
  }

  getClientes()
  {
    return this.cadastros;
  }

  getClienteById(id: String)
  {
    return this.cadastros.find(Cadastro => Cadastro.id == id);
  }
}
