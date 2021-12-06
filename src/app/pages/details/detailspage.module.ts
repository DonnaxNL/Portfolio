import { NgModule } from "@angular/core";
import { DetailsPageComponent, PopUpImage } from "./detailspage.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ExperienceData } from "src/app/constants/experience";

@NgModule({
    declarations: [
        DetailsPageComponent,
        PopUpImage
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ExperienceData
    ],
    entryComponents: [
        PopUpImage
    ]
})

export class DetailsPageModule {
}