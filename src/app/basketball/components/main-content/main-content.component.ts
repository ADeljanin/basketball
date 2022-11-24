import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTeamComponent } from '../new-team/new-team.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  // dialog: any;
  // constructor() {}

  // openDialog() {
  //   let dialogRef = this.dialog.open(NewTeamComponent);
  // }

  constructor(public dialog: MatDialog) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // implements OnInit
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(MainContentComponent, {
  //     width: '350px',
  //     data: { team: this.team },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed');
  //     this.team = result;
  //   });
  // }

  openDialog() {
    let dialogRef = this.dialog.open(NewTeamComponent, {
      width: '30rem',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  ngOnInit(): void {}
}
