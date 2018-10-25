import * as React from 'react';

import { Wrapper } from '../wrapper/wrapper';
import { HeaderNavigation } from './navigation/header-navigation';

import * as styles from './header.scss';



const Header: React.SFC = () => {
  return (
    <header className={styles.header} id="header">
      <Wrapper className={styles.content}>
        <h1 className={styles.title}>Simple Boilerplate</h1>
        <HeaderNavigation className={styles.positionNavigation} />
      </Wrapper>
    </header>
  );
};



export { Header };