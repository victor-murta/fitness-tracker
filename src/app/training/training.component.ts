import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
  @Output() trainingStart = new EventEmitter<void>();

  onGoingTraining = false;

  onStartTraining(){
    this.trainingStart.emit();
  }

}
