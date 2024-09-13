import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = "Adriano Misina";
  public age: number = 32;
  public condition = this.age > 1 ? "Teste" : "Teste2";
  public isDisabled = false;
  public srcValue = 'https://avatars.githubusercontent.com/u/65734814?v=4'
  public sun(val1:number, val2:number) {
    return val1 + val2
  }
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'

  public sunAge() { 
    return this.age ++
  } 

  public subAge() { 
    return this.age --
  } 

  public onKeyDown(event: Event) {
    return console.log(event)
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    })
  }
}
