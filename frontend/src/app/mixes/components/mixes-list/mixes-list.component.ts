import { Component, OnInit } from '@angular/core';
import { Mix } from '../../interfaces/mix';
import { MixService } from '../../services/mix-service';

@Component({
  selector: 'mixes-list',
  templateUrl: './mixes-list.component.html',
  styleUrls: ['./mixes-list.component.scss'],
})
export class MixesListComponent implements OnInit {
  mixes: Mix[];

  constructor(private mixService: MixService) {}

  ngOnInit(): void {
    this.getMixes();
  }

  getMixes(): void {
    this.mixes = this.mixService.getMixes();
  }
}
