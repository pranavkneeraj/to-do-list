import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';

import { SwapListComponent } from './components/swap-list/swap-list.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
   {
     path: 'dashboard',
     component: SwapListComponent
   }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
