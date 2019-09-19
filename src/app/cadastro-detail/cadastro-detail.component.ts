import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CadastroService} from '../cadastro/cadastro.service';
import {Cadastro} from '../cadastro/cadastro';

@Component({
  selector: 'app-cadastro-detail',
  templateUrl: './cadastro-detail.component.html',
  styleUrls: ['./cadastro-detail.component.css']
})
export class CadastroDetailComponent implements OnInit {
  cadastro: Cadastro = new Cadastro();
  constructor(private route: ActivatedRoute, private cadastroService:CadastroService) { }

  ngOnInit() {
    this.getCadastro();
  }

  
  getCadastro()
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.cadastro = this.cadastroService.getClienteById(id);
  }

}
