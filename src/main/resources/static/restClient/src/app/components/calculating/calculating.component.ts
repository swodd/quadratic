import { Component, OnInit } from '@angular/core';
import { ExpressionService } from '../../shared-service/expression.service';
import { Expression } from '../../expression';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrls: ['./calculating.component.css']
})
export class CalculatingComponent implements OnInit {

  private expressions:Expression[];
  
  constructor(private _expressionService:ExpressionService, private _router:Router) { }

  ngOnInit() {
    this._expressionService.getExpressions().subscribe((expressions)=>{
      this.expressions=expressions;
    },(error)=>{
      console.log(error);
    })
  }

  newExpression(){
   
    this._router.navigate(['/result']);
  }

}
