import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  quizs : Quiz[] = [];

MonQuiz= {
  Nom : "",
  Code:"",
  Etat: false
};

  constructor(private quizservice: QuizserviceService) { }

  ngOnInit(): void {
    this.getallquiz();
  }

  getallquiz(){
return this.quizservice.getall()
.subscribe((quizs) => this.quizs = quizs)
  }

  deleteQuiz(id:any){
   this.quizservice.delete(id).subscribe(() => {
    this.quizs = this.quizs.filter(Quiz => Quiz.id!=id)
   });
  }

  AddQuiz(){
    this.quizservice.add(this.MonQuiz)
    .subscribe((Quiz) => 
    this.quizs= [Quiz, ...this.quizs]);
  }

}
