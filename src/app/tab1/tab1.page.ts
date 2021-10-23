import { Component, OnInit} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  

  ngOnInit() {
  }

  

  constructor(private actionSheetController: ActionSheetController) { }

  async presentAlert() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      header: 'Opciones',
      buttons: [{
        text: 'Enviar',
        icon: 'send',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Descargar imagen',
        icon: 'download',
      }, {
        text: 'Ocultar Pin',
        icon: 'close',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Reportar Pin',
        icon: 'warning',
        handler: () => {
          console.log('Cancel clicked');
        }
      }],
      subHeader: 'Este pin esta inspirado en tu actividad reciente',
    });
    await actionSheet.present();
  
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
  //Cambiar tema a oscuro
  toggleTheme(event){ 
    if(event.detail.checked){ 
      document.body.setAttribute('color-theme','dark'); 
    }else{ 
     document.body.setAttribute('color-theme','light'); 
    } 
   } 
 
}
