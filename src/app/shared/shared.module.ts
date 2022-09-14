import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

const SharedComponents = [
  FooterComponent,
  NavigationComponent
]

@NgModule({
  declarations: [SharedComponents],
  exports: [SharedComponents, MaterialModule],
  imports: [MaterialModule],
})
export class SharedModule {}
