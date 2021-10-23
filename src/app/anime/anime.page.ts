import { Component, OnInit } from '@angular/core';
interface Imagenes{
  img: string;
  text: string;
  
}
@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage {

  constructor() {} 

  img: Imagenes[]=[
    {
      text:"50 Pines de fondo de pantalla y otros temas que seguir",
      img:"assets/v.jpeg",
    
  },
  {
    text:"18 Pines que marcan tendencia sobre diseño",
    img:"assets/ev.png",
    
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/zeni.jpeg",
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/zt.jpeg",
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/des.jpeg",
  },
  {
    text:"Wallpapers 4k para celulares",
    img:"assets/egg.jpeg",
  },
]
  //Aagregar Favoritos
  favorito=false;

  onClick(){
    this.favorito= ! this.favorito;
  }
}
  

