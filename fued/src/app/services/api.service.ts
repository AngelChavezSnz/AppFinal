import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopLevel } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiUrl = 'http://127.0.0.1:80/api1/method.php'; // Reemplaza con la URL de tu API
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<TopLevel> {
    return this.http
      .get<TopLevel>('http://127.0.0.1:80/api1/method.php')
      .pipe(map((resp) => resp));
  }

  // Método para enviar datos por POST
  postDatos(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos, {
      responseType: 'text' as 'json',
    });
  }

  eliminarDato(id_mae: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}?id_mae=${id_mae}`, {
      responseType: 'text' as 'json',
    });
  }
}
