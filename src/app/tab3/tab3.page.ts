import { Component } from '@angular/core';
interface Tarjetas{
  img: string;
  text: string;
  
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  card: Tarjetas[]=[
    {
      text:"50 Pines de fondo de pantalla y otros temas que seguir",
      img:"assets/ag.jpeg",
    
  },
  {
    text:"18 Pines que marcan tendencia sobre diseño",
    img:"assets/ten.jpeg",
    
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/p.jpg",
  }
]
}
