import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  screenIsSmall: boolean = true;
  isOpened: boolean = false;

  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.screenIsSmall = state.matches;
      });
  }
}
