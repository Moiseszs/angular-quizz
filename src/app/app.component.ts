import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question } from './model/question';
import { DataService } from './services/data.service';
import { Quizz } from './model/quizz';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-quiz';

  quizz: Quizz;

  constructor(service: DataService){
    this.quizz = service.get()
    console.log(this.quizz)
  }
}
