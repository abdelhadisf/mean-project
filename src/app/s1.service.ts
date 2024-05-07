import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private http:HttpClient) {}

  getData():Observable<any> {
    return this.http.get<any[]> ('http://localhost:3000/user')
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user', data);
  }

  deleteStudent(studentId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/user/${studentId}`);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.patch<any>('http://localhost:3000/user/' + student._id, student);
  }
  

   direBonjr(){
    console.log("bonjour")
  }
}
