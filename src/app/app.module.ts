import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroListagemComponent } from './cadastro-listagem/cadastro-listagem.component';
import { CadastroDetailComponent } from './cadastro-detail/cadastro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CadastroListagemComponent,
    CadastroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
