import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

getLogin (param) {
  console.log(param)
  const res = this.http.post('http://localhost:7777/users/login', param ).toPromise();
  return (res);

}


}



