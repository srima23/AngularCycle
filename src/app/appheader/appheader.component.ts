import { Component, OnInit } from '@angular/core';
import { Cycle } from '../cycle';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent{
  cycles: Cycle[] = [];
//     id : 1,
//     brand : 'Hero',
//     stock : 100,
//     numborrow : 0
//   },
//   {
//     id : 2,
//     brand : 'Herculas',
//     stock : 200,
//     numborrow : 0
//   }
// ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Make an HTTP GET request to fetch the list of cycles from the API
    this.http.get<Cycle[]>('http://localhost:8080/api/cycle/list')
      .subscribe(cycles => {
        this.cycles = cycles;
      });
  }

  onReturn(id:number,value:string){
    let numVal = 0;
    if(value!="")
      numVal = parseInt(value);
    const path = 'http://localhost:8080/api';
    const followpath = 'return';
    const mainpath = `${path}/${id}/${followpath}?count=${numVal}`;

  
    this.http.post<Cycle[]>(mainpath,null).subscribe(cycles => {
      this.cycles = cycles;
    });
  }
  onRestock(id: number,value: string) {
    let numVal = 0;
    if(value!="")
      numVal = parseInt(value);
    const path = 'http://localhost:8080/api';
    const followpath = 'restock';
    const mainpath = `${path}/${id}/${followpath}?count=${numVal}`;

  
    this.http.post<Cycle[]>(mainpath,null).subscribe(cycles => {
      this.cycles = cycles;
    });
}

onAddToCart(id: number,value : string) {
  let numVal = 0;
    if(value!="")
      numVal = parseInt(value);
    const path = 'http://localhost:8080/api';
    const followpath = 'borrow';
    const mainpath = `${path}/${id}/${followpath}?count=${numVal}`;

  
    this.http.post<Cycle[]>(mainpath,null).subscribe(cycles => {
      this.cycles = cycles;
    });

// onBorrow(id: number,value : string) {
//   let numVal = 0;
//     if(value!="")
//       numVal = parseInt(value);
//     const path = 'http://localhost:8080/api';
//     const followpath = 'borrow';
//     const mainpath = `${path}/${id}/${followpath}?count=${numVal}`;

  
//     this.http.post<Cycle[]>(mainpath,null).subscribe(cycles => {
//       this.cycles = cycles;
//     });
// }

}
}
