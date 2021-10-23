import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  
  async presentAlert() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      header: 'Perfil',
      buttons: [
        {
        text: 'Configuración',
        icon: 'settings',
      }, {
        text: 'Copiar el enlace del perfil',
        icon: 'copy',
      }, {
        text: 'Cerrar',
        icon: 'close',
      }],
    });
    await actionSheet.present();
  
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
