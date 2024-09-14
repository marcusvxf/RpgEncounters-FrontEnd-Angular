import { Injectable } from '@angular/core';
import { ICreature } from '../../shared/interfaces/creature.interface';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CreatureService {
  constructor(private http: HttpClient) {}

  private base_url = environment.api_url + '/creature';

  public get(id: number): Observable<ICreature> {
    const formated_url = this.base_url;
    return this.http.get<ICreature>(formated_url, { params: { id: id } }).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  public list(): Observable<ICreature[]> {
    const formated_url = this.base_url;
    return this.http.get<ICreature[]>(formated_url, {}).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
