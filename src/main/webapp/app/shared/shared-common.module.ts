import { NgModule } from '@angular/core';

import { RfbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RfbSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RfbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RfbSharedCommonModule {}
