import { Component, OnInit } from '@angular/core';
import { ExpressionService } from '../../shared-service/expression.service';
import { Expression } from '../../expression';

@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrls: ['./calculating.component.css']
})
export class CalculatingComponent implements OnInit {

  private expressions:Expression[];
  
  constructor(private _expressionService:ExpressionService) { }

  ngOnInit() {
    this._expressionService.getExpressions().subscribe((expressions)=>{
      this.expressions=expressions;
    },(error)=>{
      console.log(error);
    })
  }

}
