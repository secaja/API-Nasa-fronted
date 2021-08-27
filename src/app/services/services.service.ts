import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImagenApolo } from '../model/imagen-apolo';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  url = "/apolo-once/imagenes";

  obtenerImagenesApolo(): Observable<ImagenApolo[]>{
    return this.http.get<ImagenApolo[]>(this.url);
  } 

}
