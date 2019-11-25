import { Component, OnInit } from '@angular/core';
import { BambooService } from '../../services/bamboo.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private bambooService: BambooService) { }

  ngOnInit() {
  }

  search(){
    this.bambooService.getApi().subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
