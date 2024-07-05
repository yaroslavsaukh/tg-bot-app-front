import { AppRoutes, SVGComponent } from 'shared';

export interface MenuItems {
  id: number;
  icon: SVGComponent;
  header: string;
  route: AppRoutes;
}
