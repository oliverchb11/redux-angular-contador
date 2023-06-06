import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  public contador = 0;
  private store = inject(Store<AppState>)

  constructor(){
    this.store.select('contador').subscribe(contador =>  this.contador = contador)  
  }

  public multiplicar(): void{
    this.store.dispatch(actions.multiplicar({numero: 4}))
  }
  
  public dividir(): void{
    this.store.dispatch(actions.dividir({numero: 8}))
  }

}
