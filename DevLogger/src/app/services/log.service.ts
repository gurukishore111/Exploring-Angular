import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Logs } from './../components/model/Logs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Logs[];

  private logSource = new BehaviorSubject<Logs>({
    id: null,
    text: null,
    date: null,
  });

  seletedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {
    //     id: '1',
    //     text: 'Genrated Componets',
    //     date: new Date('12/24/2017 12:15:23'),
    //   },
    //   {
    //     id: '2',
    //     text: 'Second Componets',
    //     date: new Date('12/24/2017 12:15:23'),
    //   },
    //   {
    //     id: '3',
    //     text: 'Third Componets',
    //     date: new Date('12/24/2017 12:15:23'),
    //   },
    // ];

    this.logs = [];
  }

  getLogs(): Observable<Logs[]> {
    if (localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(
      this.logs.sort((a, b) => {
        return (b.date = a.date);
      })
    );
  }

  setFormLog(log: Logs) {
    this.logSource.next(log);
  }

  addLog(log: Logs) {
    this.logs.unshift(log);

    //Add to LocalStroage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  updateLog(log: Logs) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);

    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(log: Logs) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
