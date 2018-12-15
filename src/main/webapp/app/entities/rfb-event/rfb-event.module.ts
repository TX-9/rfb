import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RfbSharedModule } from 'app/shared';
import {
    RfbEventComponent,
    RfbEventDetailComponent,
    RfbEventUpdateComponent,
    RfbEventDeletePopupComponent,
    RfbEventDeleteDialogComponent,
    rfbEventRoute,
    rfbEventPopupRoute
} from './';

const ENTITY_STATES = [...rfbEventRoute, ...rfbEventPopupRoute];

@NgModule({
    imports: [RfbSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RfbEventComponent,
        RfbEventDetailComponent,
        RfbEventUpdateComponent,
        RfbEventDeleteDialogComponent,
        RfbEventDeletePopupComponent
    ],
    entryComponents: [RfbEventComponent, RfbEventUpdateComponent, RfbEventDeleteDialogComponent, RfbEventDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbRfbEventModule {}
