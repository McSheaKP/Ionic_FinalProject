import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {}

  url:string = "http://localhost:3000/api";
  appUsersUrl: string = "/appUsers/";
  loggedIn: boolean = false; 
  user: any = {
      firstName: "TesterUserName",
      lastName: "TestLast",
      email: "test1234@gmail.com",
      password: "1234"
  }
  
   register(user){
    return this.http.post(this.url+"/appUsers/", user);
   }
   
   login(user){
    return this.http.post(this.url+"/appUsers/login", user);
   }
   
   logged(){
    let userId = sessionStorage.getItem("userId");
    return this.http.get(this.url+this.appUsersUrl + userId);
   }

   

   favStock(stock){
    let userId = sessionStorage.getItem("userId");
    return this.http.post(this.url + this.appUsersUrl + userId + "/stocks", stock);
   }
   
   
   getUserStocks(){
    let userId = sessionStorage.getItem("userId");
    return this.http.get(this.url + this.appUsersUrl + userId + "/stocks/")
   }
   
   deleteUserStock(stockId){
     let userId = sessionStorage.getItem("userId");
     return this.http.delete(this.url + this.appUsersUrl + userId + "/stocks/" + stockId)
   }
   
}



