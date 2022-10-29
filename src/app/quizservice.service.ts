import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  url = "http://localhost:3000/Quiz";

  constructor(private http: HttpClient) { }

  getall(){
    return this.http.get<Quiz[]>(this.url);
  }

  delete(id:any){
   return  this.http.delete(`${this.url}/${id}`);
  }

  add(Quiz:any){
return this.http.post<Quiz>(this.url, Quiz);
  }

}
