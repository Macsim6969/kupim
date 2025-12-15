import {NgModule} from "@angular/core";
import {QuoteComponent} from "./quote.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ShareModule} from "../../shared/modules/share.module";
import {QuoteHeaderComponent} from "./components/quote-header/quote-header.component";
import {ChoiceProductsModule} from "../choice-products/choice-products.module";
import {EasyStepsModule} from "../easy-steps/easy-steps.module";
import {FooterModule} from "../footer/footer.module";
import {ProdInfoModule} from "../prod-info/prod-info.module";
import {QuestionsModule} from "../questions/questions.module";

const routes: Routes = [{ path: '', component: QuoteComponent }];

@NgModule({
  declarations: [
    QuoteComponent,
    QuoteHeaderComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    ChoiceProductsModule,
    EasyStepsModule,
    FooterModule,
    ProdInfoModule,
    QuestionsModule
  ],
  exports: []
})

export class QuoteModules {}
