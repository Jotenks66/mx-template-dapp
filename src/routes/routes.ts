import { RouteNamesEnum } from 'localConstants';
import { Dashboard, Disclaimer, Home, Unlock } from 'pages';

interface RouteWithTitleType {
  path: string;
  component: any;
  title: string;
  authenticatedRoute?: boolean;
}

export const routes: RouteWithTitleType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home
  },
  {
    path: RouteNamesEnum.unlock,
    title: 'Unlock',
    component: Unlock
  },
  {
    path: RouteNamesEnum.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: RouteNamesEnum.disclaimer,
    title: 'Disclaimer',
    component: Disclaimer
  }
];
