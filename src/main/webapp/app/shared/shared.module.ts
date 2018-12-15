import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { RfbSharedLibsModule, RfbSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [RfbSharedLibsModule, RfbSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [RfbSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbSharedModule {
    static forRoot() {
        return {
            ngModule: RfbSharedModule
        };
    }
}
