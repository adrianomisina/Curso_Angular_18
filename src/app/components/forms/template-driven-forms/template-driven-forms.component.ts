import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})

export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{ comida: string; preco: string }>>([
    {
      comida: 'x-salada',
      preco: 'R$10',
    },

    {
      comida: 'x-bacon',
      preco: 'R$11',
    },

    {
      comida: 'cochinha',
      preco: 'R$9',
    },
  ]);

  public submitForm(form: NgForm) {
    console.log(form.valid)
    if(form.valid) {
      console.log(form.value)
    }
  }
}
