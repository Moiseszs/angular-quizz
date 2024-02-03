import { Component } from '@angular/core';
import { Quizz } from '../../model/quizz';
import { Question } from '../../model/question';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import {veridicts} from "../../../assets/data/quizzes.json"

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {

  questions: Question[] = []

  quizz: Quizz;

  questionSelected: Question;

  questionIndex = 0

  questionMaxIndex = 0

  title = ''

  answers: string[] = []

  finished = false

  veridict = 'Incompleto'

  constructor(dataService: DataService){

    this.quizz = dataService.get()

    this.questions = this.quizz.questions

    this.title = this.quizz.title

    this.questionMaxIndex = this.questions.length

    this.questionSelected = this.questions[0]

  }


  choose(answer: string){
    this.answers.push(answer)
    this.nextQuestion()
  }


  nextQuestion(){
    this.questionIndex++
    //this.questionSelected = this.questions[this.questionIndex]
    if(this.questionIndex < this.questionMaxIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }
    else{
      this.finished = true
      console.log(this.answers)
      this.finish()
    }
  }



  checkResult(answers: string[]){
    const result = answers.reduce((previous, current, index, array) => {
      if(array.filter(item => item === previous).length > array.filter(item => item == current).length){
        return previous
      }
      else{
        return current
      }
    })
    return result
  }

  finish(){
    let result = this.checkResult(this.answers)
    this.veridict = ((result === "A")) ? veridicts.A : veridicts.B
  }

  retry(){
    this.answers = []
    this.questionIndex = 0
    this.questionSelected = this.questions[this.questionIndex]
    this.finished = false
  }
}
