import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MainServiceService } from '../services/main-service.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-tarjeta',
  templateUrl: './modal-tarjeta.page.html',
  styleUrls: ['./modal-tarjeta.page.scss'],
})
export class ModalTarjetaPage implements OnInit {

  //accessToken='';
  accessToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwcnVlYmExIiwiZXhwIjoxNzE0MTg4MjU4fQ.aSLyWW92x0vf3rb6j9dae-1gUv9-PW8dgxledOmT4yU';
  usuarioInfo: any;
  username: string = '';
  urlFoto: string = '';
  email: string = '';
  titulos: string[] = [];
  logros: string[] = [];
  coleccion: string[] = [];
  coleccionArray: { categoria: string, cantidad: number }[] = [];
  titulosArray: any[] = [];
  logrosArray: any[] = [];

  //personalizacion tarjeta
  fuenteTarjeta: string = '';
  colorTarjeta: string = '';  
  colorTextot1: string = '';
  colorTextot2: string = '';
  colorTextot3: string = '';
  colorTextot4: string = '';
  colorTextol1: string = '';
  colorTextol2: string = '';
  colorTextol3: string = '';
  colorTextol4: string = '';
  colorTextol5: string = '';
  colorFondo1: string = '';
  colorFondo2: string = '';
  colorFondo3: string = '';
 
  constructor(private modalController: ModalController,private activedRouter: ActivatedRoute, private router: Router, private servicio: MainServiceService, private alertController: AlertController) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.accessToken = this.router.getCurrentNavigation()?.extras?.state?.['accessTokenEnviado'];
        this.colorFondo1 = this.router.getCurrentNavigation()?.extras?.state?.['colorTarjetaEnviado1'];
        this.colorFondo2 = this.router.getCurrentNavigation()?.extras?.state?.['colorTarjetaEnviado2'];
        this.colorFondo3 = this.router.getCurrentNavigation()?.extras?.state?.['colorTarjetaEnviado3'];
        this.fuenteTarjeta = this.router.getCurrentNavigation()?.extras?.state?.['fuenteTarjetaEnviado'];
      }
    })
   }
  
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.servicio.informacionUsuario(this.accessToken).subscribe(
      (data: any) => {
        this.username = data.username;
        this.urlFoto = data.url_foto;
        this.email = data.email;
        this.titulos = data.titulos;
        this.logros = data.logros;
        this.titulosArray = [...this.titulos];
        this.logrosArray = [...this.logros];
        this.coleccion = data.coleccion;
        this.coleccionArray = Object.entries(this.coleccion).map(([categoria, cantidad]) => ({ categoria, cantidad: parseInt(cantidad) }));

        this.titulosArray.forEach((titulo) => {
          if (titulo.nombre === 'novato') {
              this.colorTextot1 = 'crimson';
          } else if (titulo.nombre === 'aficionado') {
              this.colorTextot2 = 'crimson';
          } else if (titulo.nombre === 'coleccionista') {
              this.colorTextot3 = 'blue';
          } else if (titulo.nombre === 'maestro') {
              this.colorTextot4 = 'purple';
          }
        });

        this.logrosArray.forEach((logros) => {
          if (logros.nombre === 'A') {
              this.colorTextol1 = 'crimson';
          } else if (logros.nombre === 'B') {
              this.colorTextol2 = 'crimson';
          } else if (logros.nombre === 'C') {
              this.colorTextol3 = 'blue';
          } else if (logros.nombre === 'D') {
              this.colorTextol4 = 'purple';
          } else if (logros.nombre === 'E') {
            this.colorTextol5 = 'purple';
        }
          
        });

      },
      (error) => {
        this.presentAlert(error);
      }
    );
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}
