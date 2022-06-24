import {createEffect, createStore, createEvent, sample} from "effector";




const  sendFormFx = createEffect((params: object) => console.log(params))

export const submitted = createEvent();
export const setField = createEvent();



export const $form = createStore<object>({});

//@ts-ignore
$form.on( setField,(data,{key, value}) => ({
 ...data,
 [key]: value
}));

sample({
    clock: setField,
    source: $form,
    target: sendFormFx
})

//@ts-ignore
submitted.watch(e=> e.preventDefault());