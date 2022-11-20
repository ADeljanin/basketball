import { Component, OnInit } from '@angular/core';
import { NewTeamComponent } from '../new-team/new-team.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(NewTeamComponent, {});
  }

  ngOnInit(): void {}
}
