import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit, AfterViewInit {
  dateNumber: HTMLElement | undefined;
  dateText: HTMLElement | undefined;
  dateMonth: HTMLElement | undefined;
  dateYear: HTMLElement | undefined;
  date = new Date();

  setDate = () => {
    this.dateNumber = document.getElementById('dateNumber') as HTMLElement;
    this.dateText = document.getElementById('dateText') as HTMLElement;
    this.dateMonth = document.getElementById('dateMonth') as HTMLElement;
    this.dateYear = document.getElementById('dateYear') as HTMLElement;

    this.dateNumber.textContent = this.date.toLocaleString('es', { day: 'numeric' });
    this.dateText.textContent = this.date.toLocaleString('es', { weekday: 'long' });
    this.dateMonth.textContent = this.date.toLocaleString('es', { month: 'short' });
    this.dateYear.textContent = this.date.toLocaleString('es', { year: 'numeric' });
  }

  addNewTask = () => {

  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.setDate();
  }
}