import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-firework',
  templateUrl: './firework.component.html',
  styleUrls: ['./firework.component.scss'],
})
export class FireworkComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {}

}
