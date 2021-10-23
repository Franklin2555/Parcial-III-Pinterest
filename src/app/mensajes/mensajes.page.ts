import { Component, ViewChild} from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
interface message{
  user: string;
  createdAt: number;
  msg: string;
  
}
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage {

  constructor(private actionSheetController: ActionSheetController) { }

  Mensaje: message[]=[
    {
      user:'Hu Tao',
      createdAt: 1554090856000,
      msg: 'Hola... ¿cómo estas? '
    },
    {
      user:'Franklin',
      createdAt: 1554090856000,
      msg: 'Desvelado T-T'
    },
    {
      user:'Hu Tao',
      createdAt: 1554090856000,
      msg: 'Ya llegara la felicidad'
    },
  ]

  currentUser ='Franklin';
  newMsg = '';

  @ViewChild (IonContent) content: IonContent

  sendMessage(){

    this.Mensaje.push({
        user: 'Franklin',
        createdAt: new Date().getTime(),
        msg: this.newMsg
    });

    this.newMsg = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  async presentAlert() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      header: '¿Qué quieres hacer?',
      buttons: [
        {
        text: 'Ocultar conversación',
        icon: 'eye-off',
      }, {
        text: 'Reportar esta conversación',
        icon: 'alert-circle',
      }, {
        text: 'Bloquear usuarios',
        icon: 'close',
      }],
    });
    await actionSheet.present();
  
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
