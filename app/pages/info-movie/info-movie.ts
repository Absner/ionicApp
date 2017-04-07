import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { harryPotterService } from '../../servicios/harryPotter';

/*
  Generated class for the InfoMoviePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/info-movie/info-movie.html',
  providers: [harryPotterService]
})
export class InfoMoviePage {
  public item;
  public datos = [];
  public personajes;

  constructor(private listMovie: harryPotterService,
              private navCtrl: NavController,
              private navParams: NavParams) {

                this.item = navParams.get('item');
                this.getmovie(this.item);
                this.getPersonaje(this.item);

                

  }

  getmovie(item){
    this.listMovie.getDetalles(item).subscribe(
                  data  =>  {
                    this.datos = data.json();

                  },
                  err   =>  console.error(err),
                  ()    =>  console.log(this.datos)
                );

  }

  getPersonaje(item){
    this.listMovie.getPersonajes(item).subscribe(
      data  =>  {
        this.personajes = data.json();
      },
      err   =>  console.error(err),
      ()  =>  console.log(this.personajes)
    );
  }

}
