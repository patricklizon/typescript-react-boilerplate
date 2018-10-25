import * as React from 'react';

import { Wrapper } from '../wrapper/wrapper';
import { Page } from './page';

import * as styles from './page-main.scss';



const PageMain: React.SFC = () => {

  return (
    <Page aria-labelledby="page-name">
      <Wrapper>
        <article>
          <h1
            id="page-name"
            className={styles.title}
          >
            Main Page
          </h1>
          <p className={styles.paragraph}>
            Simple <br/>
            <strong>TypeScript</strong> - <strong>React</strong><br/>
            Boilerplate
          </p>
        </article>
      </Wrapper>
    </Page>
  );
};



export { PageMain };
