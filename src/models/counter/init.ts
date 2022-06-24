import {combine, createEvent, createStore} from "effector";
import {MouseEventHandler} from "react";


export const increment:MouseEventHandler<HTMLButtonElement> = createEvent('increment value');
export const decrement:MouseEventHandler<HTMLButtonElement> = createEvent('decrement value');



const $value  = createStore<number>(1);
const $valueText = $value.map(item => `Current value  = ${item}`);
export const $combinedValue = combine({counter:$value, text:$valueText});



$value
    // @ts-ignore
    .on(increment, state=> state + 1)
    // @ts-ignore
    .on(decrement, state => state - 1)