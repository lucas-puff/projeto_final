import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {CadastroDetailComponent} from './cadastro-detail/cadastro-detail.component'
import { CadastroListagemComponent} from './cadastro-listagem/cadastro-listagem.component';


const routes: Routes = [
  {path: 'cadastros', component:CadastroComponent},
  {path: 'cadastrodetail/:id', component: CadastroDetailComponent},
  {path: 'cadastrolista', component: CadastroListagemComponent},
  {path: '',redirectTo:'/cadastro', pathMatch: 'full'}
]

@NgModule({
  declarations: [RouterModule.forRoot(routes)],
  imports: [RouterModule]
})
export class AppRoutingModule { }
