export interface IRoute {
  pathname: string,
  name: string,
  icon?: string,
  state?: {
    modal?: boolean
  }
}

interface IAppRoutes {
  [prop: string]: IRoute
}



export const routes: IAppRoutes = Object.freeze({
  main: {
    pathname: "/",
    name: "main"
  },
  styles: {
    pathname: "/styles/",
    name: "styles",
  },
  packages: {
    pathname: "/packages/",
    name: "packages"
  }
});



export const headerNavigationRoutes = Object.freeze([
  routes.main,
  routes.packages,
  routes.styles
]);
