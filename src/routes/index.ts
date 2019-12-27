/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import indexRoutes from './indexRoutes';

interface IRoute {
  /** if true, then route is shown collapsed in a list */
  collapse?: boolean;
  /** component to render for this path, if there is no `redirect` */
  component?: React.ComponentType;
  /** icon for this route rendered in sidebar */
  icon?: any;
  /** name for this route rendered in navbar */
  navbarName?: string;
  /** path for current route */
  path: string;
  /** if true, then this route redirects to `pathTo` */
  redirect?: boolean;
  /** name for this route rendered in sidebar */
  sidebarName?: string;
  /** target redirect route if `redirect===true` */
  pathTo?: string;
}

/** in any route list that is rendered in a menu or sidebar, this type will include a divider in the list */
interface IRouteDivider {
  divider: boolean;
}

type TRouteOrDivider = IRoute | IRouteDivider;

type TRoutes = TRouteOrDivider[];

/** user-defined type guard */
function isRouteDivider(path: TRouteOrDivider): path is IRouteDivider {
  return (path as IRouteDivider).divider !== undefined;
}

export { indexRoutes, isRouteDivider, IRoute, IRouteDivider, TRouteOrDivider, TRoutes };
