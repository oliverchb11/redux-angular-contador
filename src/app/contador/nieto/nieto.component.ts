import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../contador.actions';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {
  public contador: number = 10;
  private store = inject(Store<AppState>)

  constructor(){
    this.store.select('contador').subscribe(contador =>  this.contador = contador)  
  }

  public reset(): void{
    this.store.dispatch(reset())
  }
}
