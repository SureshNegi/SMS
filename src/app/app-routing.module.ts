import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ComposeMessageComponent } from './compose-message/compose-message.component';
// import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

// import { AuthGuard }  from './auth/auth.guard';
// import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
       // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/