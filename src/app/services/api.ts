import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
 

@Injectable()
export class ApiService {
    private resourceUrl = 'https://comicmist.backendless.app/api/data/';
    

    constructor(private http: HttpClient) { }
    //POST Method
    create(body: any,mappingPath:any): Observable<any> { 
        return this.http.post(this.resourceUrl+mappingPath, body);
    }

    //PUT Method
    update(body: any,mappingPath:any): Observable<any> {
      
        return this.http.put(this.resourceUrl+mappingPath, body);
    }

    //GET ID Method
    find(id: number,mappingPath?:any): Observable<any> {
        return this.http.get(`${this.resourceUrl+mappingPath}/${id}`);
    }

    query(req?: any,mappingPath?:any): Observable<any> {
        if (req === undefined) {
            req = '';
        }
        return this.http.get(this.resourceUrl+mappingPath + req );
    }

    delete(id: number,mappingPath?:any): Observable<any> {
        return this.http.delete(`${this.resourceUrl+mappingPath}/${id}`, { observe: 'response', responseType: 'text' });
    }
    
    

      
}
