import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CadastroService} from '../cadastro/cadastro.service';
import { Cadastro} from './cadastro'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  cadastro: Cadastro = new Cadastro();
  cadastros: Cadastro[] = [];

  constructor(private cadastroService:CadastroService) { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm)
  {
    if(formulario.valid)
    {
      /*
      console.log(formulario);
      console.log('----- Valores do formulario');
      console.log(formulario.form.value);
      console.log('----- Valores do objeto');
      console.log(this.aluno);
      */

      this.cadastroService.cadastrarCliente(this.cadastro);

      this.cadastro = new Cadastro();
      
      

      this.cadastros = this.cadastroService.getClientes();
    }
  }

}
