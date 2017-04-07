import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { harryPotterService } from '../../servicios/harryPotter.ts';
import { InfoMoviePage } from '../info-movie/info-movie.ts';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [harryPotterService]
})
export class HomePage {

  public datos;

  //public navCtrl: NavController
  constructor(private listMovie: harryPotterService, 
              public navCtrl: NavController) {
    this.getPeliculas();
    

  }
  getPeliculas(){
    this.listMovie.getPeliculas().subscribe(
      data => {
        this.datos  = data.json();
      },
      err =>  console.error(err),
      ()  =>  console.log(this.datos)
    );
  }

  onclicItem(item){
    this.navCtrl.push(InfoMoviePage,{item: item})

  }

  
}
