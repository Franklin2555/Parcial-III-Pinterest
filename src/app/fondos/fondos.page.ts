import { Component, OnInit } from '@angular/core';
interface Imagenes{
  img: string;
  text: string;
  
}
@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.page.html',
  styleUrls: ['./fondos.page.scss'],
})
export class FondosPage implements OnInit {

  constructor() { }

   img: Imagenes[]=[
    {
      text:"50 Pines de fondo de pantalla y otros temas que seguir",
      img:"assets/sp.jpeg",
    
  },
  {
    text:"18 Pines que marcan tendencia sobre diseño",
    img:"assets/agu.jpeg",
    
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/gr.jpeg",
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/suli.jpeg",
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/ni.jpeg",
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/as.jpeg",
  },
]
  ngOnInit() {
  }

  //Aagregar Favoritos
  favorito=false;

  onClick(){
    this.favorito= ! this.favorito;
  }
}
