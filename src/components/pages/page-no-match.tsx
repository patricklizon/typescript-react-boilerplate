import * as React from 'react';

import { Wrapper } from '../wrapper/wrapper';
import { Page } from './page';



const PageNoMatch: React.SFC = () => {
  return (
    <Page aria-labelledby="page-name">
      <Wrapper>
        <h1 id="page-name">Not found!</h1>
      </Wrapper>
    </Page>
  );
};



export { PageNoMatch };
