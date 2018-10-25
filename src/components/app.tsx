import * as React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { appRoutes } from '../app-routes';

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { PageMain } from './pages/page-main';
import { PageNoMatch } from './pages/page-no-match';

import "../styles/global.scss"

class App extends React.Component {
  render (): React.ReactNode {
    return (
      <>
        <BrowserRouter>
          <>
            <Header />

            <Switch>
              <Route
                path={appRoutes.main}
                component={PageMain}
                exact
              />
              <Route
                component={PageNoMatch}
              />
            </Switch>

          </>
        </BrowserRouter>

        <Footer />
      </>
    )
  }
}



export default hot(module)(App);
