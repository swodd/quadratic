import { Component, OnInit } from '@angular/core';
import { Expression } from '../../expression';
import { Router } from '@angular/router';
import { ExpressionService } from '../../shared-service/expression.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private expression: Expression;
  private a: any;
  private b: any;
  private c: any;
  private d: number;

  constructor(private _expressionService: ExpressionService, private _router: Router) { }

  ngOnInit() {
    this.expression= new Expression;
  }

  processForm(){
    this.a=this.expression.a;
    this.b=this.expression.b;
    this.c=this.expression.c;
    this.d = this.b * this.b - 4 * this.a * this.c;

    if(this.d>0){
      this.expression.x1 = (-this.b + Math.sqrt(this.d)) / (2 * this.a);
    	this.expression.x2 = (-this.b - Math.sqrt(this.d)) / (2 * this.a);
    } if (this.d === 0) {
      this.expression.x1 = -this.b / (2 * this.a);
    } 
    this._expressionService.createExpression(this.expression).subscribe((expression)=>{
      console.log(expression);
      this._router.navigate(['/']);
    }, (error)=>{
      console.log(error);
    })
  }


}
