import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './App.module.scss';
import Counter from "./components/counter/Counter";
import Navbar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import Forms from "./components/forms/Forms";



const App: React.FC = () => {

    return (
        <div className={styles.appWrapper}>

            <div className={styles.nav}>
                <Navbar/>
            </div>

            <div className={styles.main}>
                <Routes >
                    <Route path={'/counter'} element={<Counter/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/form'} element={<Forms/>}/>
                </Routes>
            </div>
        </div>
  );
};

export default App;
