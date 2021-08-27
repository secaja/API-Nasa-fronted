import { Component } from '@angular/core';
import { ImagenApolo } from './model/imagen-apolo';
import { ServicesService } from './services/services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  imagenesApolo: ImagenApolo[];
  public imagenSeleccionada: ImagenApolo;
  public palabraClaveBusqueda: string;
    
  constructor(private service: ServicesService){
  }

  ngOnInit(): void {
    this.imagenSeleccionada = new ImagenApolo();
    this.service.obtenerImagenesApolo()
      .subscribe((imagenesApolo: ImagenApolo[]) => {
        this.imagenesApolo = imagenesApolo;
    })    
  }

  verImagen(imagenApolo: ImagenApolo){
    this.imagenSeleccionada = imagenApolo;
  }

  agregarQuitarFavorito(favorito: boolean){
    this.imagenSeleccionada.favorito = favorito;
    for(const imagen of this.imagenesApolo){
        if(imagen.id == this.imagenSeleccionada.id){
          imagen.favorito = favorito;
        }
    }
  }

  textoFavorito(): String {
    if(this.imagenSeleccionada.favorito){
        return "Si";
    }else{
        return "No";
    }
}
  buscar(){    
    let imagenFiltrada : ImagenApolo[] = [];
    for(let imagen of this.imagenesApolo){     
      for(let palabrasClaves of imagen.palabrasReservadas){
        if(palabrasClaves.includes(this.palabraClaveBusqueda)){
          imagenFiltrada.push(imagen);
        }        
      }
    }

    this.imagenesApolo = imagenFiltrada;    
  }
}
