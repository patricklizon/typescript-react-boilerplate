import * as React from 'react';

import * as styles from './page.scss';


const Page: React.SFC = ({children, ...rest}) => {
  return(
    <main
      id="main"
      className={styles.page}
      {...rest}
    >
        {children}
    </main>
  )
}



export { Page }
