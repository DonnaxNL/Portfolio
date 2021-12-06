import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { ExperienceComponent } from "./experience/experience.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ExperienceData } from "src/app/constants/experience";

@NgModule({
    declarations: [
        HomeComponent,
        ExperienceComponent,
        AboutMeComponent,
        FooterComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ExperienceData
    ]
})

export class HomeModule {
}