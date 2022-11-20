import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss'],
})
export class NewTeamComponent implements OnInit {
  teamForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      conference: ['', Validators.required],
      division: ['', Validators.required],
      city: ['', Validators.required],
      arena: ['', Validators.required],
    });
  }

  addTeam() {
    console.log(this.teamForm.value);

    localStorage.setItem('team', JSON.stringify(this.teamForm.value));
  }
  // constructor(public dialog: MatDialog) {}
  // // ngOnInit(): void {
  // //   throw new Error('Method not implemented.');
  // // }
  // // implements OnInit
  // // openDialog(): void {
  // //   const dialogRef = this.dialog.open(MainContentComponent, {
  // //     width: '350px',
  // //     data: { team: this.team },
  // //   });
  // //   dialogRef.afterClosed().subscribe((result) => {
  // //     console.log('The dialog was closed');
  // //     this.team = result;
  // //   });
  // // }
  // openDialog() {
  //   this.dialog.open(NewTeamComponent, {
  //     width: '30rem',
  //   });
  // }
}
