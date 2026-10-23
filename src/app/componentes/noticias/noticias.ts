import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoticiaService } from '../../servicos/noticia';
@Component({
  imports: [RouterLink],
  selector: 'app-noticias',
  styleUrl: './noticias.scss',
  templateUrl: './noticias.html',
})
export class Noticias {
  
  private noticiaService = inject(NoticiaService);
  
  noticias: any[] = this.noticiaService.getNoticias();

}
