import React from 'react'
import styles from './Home.module.css';
import TransactionForm from '../../components/TransactionForm';
import { useAuthContext } from '../../hooks/useAuthContext';

const Home = () => {
  const { user } =useAuthContext();

  return (
    <div className={styles.container}>
    <div className={styles.content}>
      거래 내역
    </div>
    <div className={styles.sidebar}>
      <TransactionForm uid={user.uid}/>
    </div>
  </div>
  )
}

export default Home
