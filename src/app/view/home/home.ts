import { Component } from '@angular/core';
import { Noticias } from '../../componentes/noticias/noticias';

@Component({
  imports: [Noticias],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
