import React from 'react';
import styles from './Counter.module.scss';
import {useStore} from "effector-react";
import {$combinedValue, increment, decrement} from "../../models/counter/init";



const Counter: React.FC = () => {

  const combinedValue = useStore($combinedValue)



    return (
      <div className={styles.counterWrapper}>
          <div>{combinedValue.counter}</div>
          <a>{combinedValue.text}</a>

          <div className={styles.btnWrapper}>
              <div><button
                  onClick={increment}>Increment</button></div>
              <div><button
                  onClick={decrement}>Decrement</button></div>
          </div>
      </div>
  );
};

export default Counter;
