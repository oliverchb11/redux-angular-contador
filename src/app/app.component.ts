import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0;
  private store = inject(Store<AppState>)
  constructor(){
    this.store.select('contador').subscribe(contador =>  this.contador = contador)  
  }

  public increment(): void{
    this.store.dispatch(actions.increment())
  }
  
  public decrement(): void{
    this.store.dispatch(actions.decrement())
  }

  public countChange(contador: number){
    this.contador = contador;
  }
}
