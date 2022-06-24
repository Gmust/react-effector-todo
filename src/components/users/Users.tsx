import React from 'react';
import styles from './Users.module.scss'
import { $user, fetchUserFx} from "../../models/users/init";
import {useEvent, useStore} from "effector-react";




const url =
   ' https://jsonplaceholder.typicode.com/todos'

const Users = () => {
    const user = useStore($user)
    const pending:boolean = useStore(fetchUserFx.pending)
    const fetchEvent = useEvent(fetchUserFx)

    return (
        <div>
            {user ? <div> current user: {     // @ts-ignore
                user.map(item => <div>{item.title}</div>)}</div> : <div>no current user</div>}
            <button disabled={pending} onClick={() => fetchEvent(url)}>
                load user
            </button>
        </div>
    )
}
export default Users;