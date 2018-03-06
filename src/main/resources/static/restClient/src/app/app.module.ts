import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatingComponent } from './components/calculating/calculating.component';
import { ResultComponent } from './components/result/result.component';
import { ExpressionService } from './shared-service/expression.service';

const appRoutes: Routes=[
  {path:'', component: CalculatingComponent},
  {path:'result', component: ResultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatingComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExpressionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
