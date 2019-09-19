import { Component, OnInit } from '@angular/core';
import { CadastroService} from '../cadastro/cadastro.service';
import { Cadastro} from '../cadastro/cadastro';

@Component({
  selector: 'app-cadastro-listagem',
  templateUrl: './cadastro-listagem.component.html',
  styleUrls: ['./cadastro-listagem.component.css']
})
export class CadastroListagemComponent implements OnInit {
  cadastros: Cadastro[] = [];
  constructor(private cadastroService:CadastroService) { }

  ngOnInit() {
    this.cadastros = this.cadastroService.getClientes();
  }

}
