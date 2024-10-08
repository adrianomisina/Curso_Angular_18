import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  registerLocaleData,
  UpperCasePipe,
} from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { of, delay } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import localePt from '@angular/common/locales/pt';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';

registerLocaleData(localePt)

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    CustomStringPipe
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers:[{provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AngularPipesComponent {
  public date = signal(new Date());
  public json = signal([
    { nome: 'Ana' },
    { nome: 'Bruno' },
    { nome: 'Carlos' },
    { nome: 'Daniela' },
    { nome: 'Eduardo' },
  ]);

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));
}
