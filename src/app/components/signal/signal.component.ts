import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent {
  public firstName = signal('Adriano');
  public lastName = signal('Misina');

  public fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName();
  });

  public array = signal([1]);

  constructor() {
    effect(() => {
      console.log(this.firstName())
      console.log(this.array())
    })
  }

  public updateName() {
    return this.firstName.set("João");
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}