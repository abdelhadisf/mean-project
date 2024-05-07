  // Define an interface for your data structure
  interface MyData {
    name: string;
    age: number;
  }

  // Your component code
  import { Component, OnInit } from '@angular/core';
  import { RouterLink, RouterOutlet } from '@angular/router';
  import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-root',
    standalone : true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],

    imports : [RouterOutlet,RouterLink,CommonModule,FormsModule] 
  })
  export class AppComponent  {


    
    // data: MyData[] = []; // Use the defined interface here

    // constructor(private dataService: S1Service) {}

    // ngOnInit(): void {
    //   this.dataService.getData().subscribe(
    //     (data: MyData[]) => { // Specify the type of 'data' as MyData[]
    //       this.data = data;
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     }
    //   );
    // }

    // Method to handle form submission
    // onAddStudent(formData: any) {
    //   this.dataService.postData(formData.value).subscribe(
    //     (response) => {
    //       console.log('Student added successfully:', response);
    //       // After successful addition, refresh the data displayed
    //       this.ngOnInit();
    //     },
    //     (error) => {
    //       console.error('Error adding student:', error);
    //     }
    //   );
    // }
  }
