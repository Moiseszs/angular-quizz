import { Component } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [QuizzComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
