import * as cn from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { CommonHtmlProps } from '../../../../typings/html';
import { headerNavigationRoutes } from '../../../routes';

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
        {headerNavigationRoutes.map(route => <ListedLink to={route.pathname} name={route.name} key={route.pathname} />)}
      </ul>
    </nav>
  );
};



export { HeaderNavigation };