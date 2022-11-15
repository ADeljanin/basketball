import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss'],
})
export class NewTeamComponent implements OnInit {
  animal: string | undefined;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MainContentComponent, {
      width: '350px',
      data: { animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
