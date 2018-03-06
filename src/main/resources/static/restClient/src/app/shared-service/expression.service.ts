import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Expression } from '../expression';

@Injectable()
export class ExpressionService {

  private baseUrl: string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor( private _http:Http) {  }

  getExpressions(){
    return this._http.get(this.baseUrl + '/expressions', this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  getExpression(id: Number){
    return this._http.get(this.baseUrl + '/expressions' + id, this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createExpression(expression: Expression){
    return this._http.post(this.baseUrl + '/expressions', JSON.stringify(expression), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error || "SERVER ERROR");
  }

}
