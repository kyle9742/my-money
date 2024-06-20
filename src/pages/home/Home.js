import React from 'react'
import styles from './Home.module.css';
import TransactionForm from '../../components/TransactionForm';

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      거래 내역
    </div>
    <div className={styles.sidebar}>
      <TransactionForm />
    </div>
  </div>
  )
}

export default Home
