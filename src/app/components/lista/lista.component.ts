import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit, AfterViewInit {
  
  //Declarando variables de la fecha
  dateNumber: HTMLElement | undefined;
  dateText: HTMLElement | undefined;
  dateMonth: HTMLElement | undefined;
  dateYear: HTMLElement | undefined;
  date = new Date();


  //Esta funcion se ejecuta con el componente, da los valores de la fecha actual
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
    const tasksContainer = document.getElementById('tasksContainer') as HTMLElement;
    const { value } = document.getElementById('input') as HTMLInputElement;

    console.log(value);

    //En el caso de el input este vacio no retorna nada
    if (!value) return;

    //Se crea la nueva tarea
    const task = document.createElement('div');
    //Se le agrega la clase task
    task.classList.add('task');

    console.log(task)

    //Añadiendo la opcion de tachar
    /*
    task.addEventListener('click', this.changeTaskState);
    */
   
    task.textContent = value;

    //Agrega la tarea nueva como primer nodo a la lista
    tasksContainer.prepend(task);
  };

  /*
  changeTaskState = (event: Event) => {
    const target = event.target as HTMLElement | null;
    if (target) {
      target.classList.toggle('done');
    }
  };

  order = () => {
    const done: any[] = [];
    const toDo: any[] = [];
    const tasksContainer = document.getElementById('tasksContainer') as HTMLElement;
    tasksContainer.childNodes.forEach(el => {
      if (el instanceof Element) {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
      }
    });
    return [...toDo, ...done];
  };

  renderOrderedTasks = () => {
    const tasksContainer = document.getElementById('tasksContainer') as HTMLElement;
    this.order().forEach(el => tasksContainer.appendChild(el))
  }
  */

  ngOnInit() { }

  ngAfterViewInit() {
    this.setDate();
  }
}