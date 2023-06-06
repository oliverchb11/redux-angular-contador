import {  Action, createReducer, on } from "@ngrx/store";
import { decrement, dividir, increment, multiplicar, reset } from "./contador.actions";


// export function contadorReducer(state: number = 10, action: Action){
    //     switch (action.type) {
        //         case increment.type:
        //               return  state + 1;
        //         case decrement.type:
        //               return  state - 1;
        //         case multiplicar.type:
        //               return  state * 2;
        //         case dividir.type:
        //               return  state / 2;
        //         case reset.type:
        //               return  state = 0;
            
        
        //         default:
        //             return state;
        
        //     }
        // }
        
export const initialState = 20;


const _counterReducer = createReducer(initialState, 
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(multiplicar, (state, {numero}) => state * numero),
    on(dividir, (state, {numero}) => state / numero),
    on(reset, (state) => initialState),
    )


    export function counterReducer(state: any, action: any){
        return _counterReducer(state, action)
    }
