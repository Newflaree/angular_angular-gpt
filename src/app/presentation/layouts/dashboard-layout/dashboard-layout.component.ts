import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarMenuItemComponent } from '../../components/side-bar-menu-item/side-bar-menu-item.component';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideBarMenuItemComponent
  ],
  templateUrl: './dashboard-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent {
  public routes = routes[0].children?.filter( (route) => route.data )
}
