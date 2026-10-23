import { Component, Input, OnInit, inject } from '@angular/core';
import { NoticiaService } from '../../servicos/noticia';

@Component({
  imports: [],
  selector: 'app-noticia',
  styleUrl: './noticia.scss',
  templateUrl: './noticia.html',
})
export class Noticia implements OnInit {

  @Input() id!: string;

  private noticiaService = inject(NoticiaService);  

  noticia: any;

  ngOnInit() {
    if(this.id) {
      const id: number = Number(this.id);

      this.noticia = this.noticiaService.getNoticiaFindById(id);
    }
  }
  

  voltar(event: Event) {
    event.preventDefault();

    window.history.back();
  }

}
