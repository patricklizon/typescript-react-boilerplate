import * as React from 'react';

import { Wrapper } from '../wrapper/wrapper';
import * as styles from './footer.scss';



const Footer: React.SFC = () => {
  return (
    <footer className={styles.footer} id="footer">
      <Wrapper>
        <div className={styles.content}>
          footer
        </div>
      </Wrapper>
    </footer>
  );
};



export { Footer };