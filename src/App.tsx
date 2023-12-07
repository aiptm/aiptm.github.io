import React from 'react';
import { Header } from './components/Header'
import { RightSideInfoSection } from './components/RightSideInfoSection'
import { LeftSideInfoSection } from './components/LeftSideInfoBlocks'
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={styles.infoContainer}>
        <RightSideInfoSection />
        <LeftSideInfoSection />
      </div>
    </>
  );
};

export default App;
