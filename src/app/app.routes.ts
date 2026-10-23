import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Noticias } from './componentes/noticias/noticias';
import { Noticia } from './componentes/noticia/noticia';

export const routes: Routes = [
    { path: '', component:Home },
    { path: 'noticias', component:Noticias },
    { path: 'noticia/:id', component:Noticia }
];
