import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public profileForm = new FormGroup({
    name:  new FormControl(''),
    mystacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('NodeJs')
    })
  })


  public updateName() {
    // this.name.setValue('Maria')
  }
}
