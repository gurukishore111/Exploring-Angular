import { Component, OnInit } from '@angular/core';
import { Logs } from './../model/Logs';
import { LogService } from './../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logs: Logs[];
  selectedLog: Logs;
  loaded: boolean = false;
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.stateClear.subscribe((clear) => {
      if (clear) {
        this.selectedLog = { id: '', text: '', date: '' };
      }
    });
    this.logService.getLogs().subscribe((item) => {
      this.logs = item;
      this.loaded = true;
    });
  }

  onSelect(log: Logs) {
    this.logService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Logs) {
    if (confirm('Are you sure?')) {
      this.logService.deleteLog(log);
    }
  }
}
