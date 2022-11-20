import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTeamComponent } from '../new-team/new-team.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(NewTeamComponent);
  }

  ngOnInit(): void {}
}
