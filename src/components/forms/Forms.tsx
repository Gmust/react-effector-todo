import React, {ChangeEventHandler} from 'react';
import styles from './Forms.module.scss'
import {useEvent, useStore, useStoreMap} from "effector-react";
import {$form, setField, submitted} from "../../models/forms/init";


interface IfieldProps {
    name: any,
    type: any,
    label: any
}


const Forms: React.FC = () => {

    const store = useStore($form)
    const setF = useEvent(setField);
    const sub = useEvent(submitted);


    //@ts-ignore
    sub.watch(e=> {
        e.preventDefault()
    });

    const handleChange = setField.prepend(event => ({
        //@ts-ignore
        key: event.target.name,
        //@ts-ignore
        value: event.target.value
    }))

    const Field = ({name, type, label}: IfieldProps) => {


        const value = useStoreMap({
            store: $form,
            keys: [name],
            // @ts-ignore
            fn: values => values[name] || '',
        })

        return(
            <div>
                {label}{''}
                <input name={name} type={type} value={value}//@ts-ignore
                       onChange={handleChange} />
            </div>
        )
    }


    return (
        <form>
            <div>
            <Field name={'login'} type={'text'} label={'Login'}/>
            <Field name={'password'} type={'password'} label={'Password'}/>
            </div>
            <div>
                <button type={'submit'}>Submit!</button>
            </div>

        </form>
    );
};


export default Forms;