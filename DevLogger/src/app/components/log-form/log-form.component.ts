import { Component, OnInit } from '@angular/core';
import { LogService } from './../../services/log.service';
import { Logs } from './../model/Logs';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    //Subscrible to the selectedLog observable
    this.logService.seletedLog.subscribe((log) => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    //Check if new log
    if (this.isNew) {
      const newLog = {
        id: this.generatedID(),
        text: this.text,
        date: new Date(),
      };
      this.logService.addLog(newLog);
    } else {
      const updateLog = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };

      this.logService.updateLog(updateLog);
    }

    //Clear state
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.logService.clearState();
  }

  generatedID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
