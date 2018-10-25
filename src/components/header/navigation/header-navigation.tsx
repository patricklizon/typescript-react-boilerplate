import * as cn from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { CommonHtmlProps } from '../../../../typings/html';
import { appRoutes } from '../../../app-routes';

import * as styles from './header-navigation.scss';



interface IListedLink {
  to: string,
  name: string,
}



const ListedLink: React.SFC<IListedLink> = ({to, name}) => {
  return (
    <li>
      <NavLink
        className={styles.link}
        to={to}
        activeClassName={styles.isActive}
        exact={true}
      >
          {name}
      </NavLink>
    </li>
  )
}



const HeaderNavigation: React.SFC<CommonHtmlProps> = ({ className }) => {
  return (
    <nav
      className={cn(styles.headerNavigation, className)}
      aria-labelledby="header-navigation-name"
    >
      <h2
        className={styles.title}
        id="header-navigation-name"
      >
        Main navigation
      </h2>

      <ul className={styles.linksList}>
        <ListedLink to={appRoutes.main} name="Main" />
        <ListedLink to={appRoutes.packages} name="Packages" />
        <ListedLink to={appRoutes.styles} name="Styles" />
      </ul>
    </nav>
  );
};



export { HeaderNavigation };