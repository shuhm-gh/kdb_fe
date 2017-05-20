import { NgModule } from '@angular/core';

import { ClickOutsideDirective } from './ng2-click-outside.directive';

@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ClickOutsideDirective]
})
export class ClickOutsideModule {}