import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()


export class harryPotterService {

    constructor(private http: Http){

    }

    getPeliculas(){
        let lista = this.http.get('https://harrypotterapi.herokuapp.com/movies');
        return lista;
    }

    getDetalles(item){
        let Movie = this.http.get('https://harrypotterapi.herokuapp.com/movies/'+item);

        return Movie;  
    }

    getPersonajes(item){
        let Personajes  =   this.http.get('https://harrypotterapi.herokuapp.com/movies/'+item+'/employees');
        return Personajes;
    }

}