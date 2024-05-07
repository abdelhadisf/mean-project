import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface MyData {
  _id:string,
  login: string;
  password: string;
}



@Component({
  selector: 'app-inscription',
  standalone : true,
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  imports : [FormsModule,CommonModule]
})
export class InscriptionComponent implements OnInit {

  data: MyData[] = [];
  showEditForm: boolean = false;
  editedStudent:MyData = {_id:'',login:'',password:''};

  constructor(private dataService: S1Service) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.dataService.getData().subscribe(
      (data: MyData[]) => {
        this.data = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onAddStudent(formData: any) {
    this.dataService.postData(formData.value).subscribe(
      (response) => {
        console.log('Student added successfully:', response);
        this.refreshData();
      },
      (error) => {
        console.error('Error adding student:', error);
      }
    );
  }

  onDeleteStudent(studentId: string) {
    this.dataService.deleteStudent(studentId).subscribe(
      () => {
        console.log('Student deleted successfully');
        this.refreshData();
      },
      (error) => {
        console.error('Error deleting student:', error);
      }
    );
  }


  onEditStudent(student: MyData) {
    this.editedStudent = { ...student }; // Copie des données de l'étudiant sélectionné
    this.showEditForm = true; // Affiche le formulaire de modification
  }

  onSubmitEditForm() {

    this.dataService.updateStudent(this.editedStudent).subscribe(
      () => {
        console.log('Student updated successfully');
        this.showEditForm = false; // Fermer le formulaire après la mise à jour réussie
        this.editedStudent = { _id:'',login: '', password: '' }; // Réinitialiser les valeurs du formulaire
        this.refreshData(); // Actualiser les données affichées
      },
      (error) => {
        console.error('Error updating student:', error);
      }
    );
 
  }
}
