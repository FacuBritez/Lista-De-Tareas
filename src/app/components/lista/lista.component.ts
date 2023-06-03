import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass'],
  encapsulation: ViewEncapsulation.None
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

    //En el caso de el input este vacio no retorna nada
    if (!value) return;

    //Se crea la nueva tarea
    const task = document.createElement('div');
    task.textContent = value;

    //Se le agrega la clase task
    task.classList.add('task');

    //Se le crea el boton para borrar la tarea
    const button = document.createElement('button');
    button.textContent = 'Borrar';

    //Se le agrega la etiqueta trash al boton
    button.classList.add('trash');

    //Se le crea la funcion para borrar la tarea
    button.addEventListener('click', () => {
      task.remove()
    });

    //Se le agrega el boton a la tarea
    task.appendChild(button);


    //Añadiendo la opcion de tachar
    task.addEventListener('click', this.changeTaskState);



    //Agrega la tarea nueva como primer nodo a la lista
    tasksContainer.prepend(task);
    (document.getElementById('input') as HTMLInputElement).value = '';
  };

  changeTaskState(event: Event) {
    const task = event.target as HTMLElement;
    task.classList.toggle('done');
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


  ngOnInit() { }

  ngAfterViewInit() {
    this.setDate();
  }
}