import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDetailComponent } from './cadastro-detail.component';

describe('CadastroDetailComponent', () => {
  let component: CadastroDetailComponent;
  let fixture: ComponentFixture<CadastroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
