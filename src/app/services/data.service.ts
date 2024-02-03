import { Injectable } from '@angular/core';
import quizzData from "../../assets/data/quizzes.json"
import { Quizz } from '../model/quizz';
import { Question } from '../model/question';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {

   }

   get(): Quizz{
    const quizz: Quizz = {
      title: quizzData.title,
      questions: [],
    }

    let questions: Question[] = []

    quizzData.questions.map(data =>{
      let question: Question = {
        id: data.id,
        options: data.options,
        question: data.question,
      }
      questions.push(question)
    })

    quizz.questions = questions

    return quizz
   }
}
