import { Component, OnInit, Input } from '@angular/core';
import { Viewlet } from '../../../models/viewlet.model';

@Component({
  selector: 'app-jqx-data-table',
  templateUrl: './jqx-data-table.component.html',
  styleUrls: ['./jqx-data-table.component.css']
})
export class JqxDataTableComponent implements OnInit {

  @Input()
  jqxDataTableObjectChild:Viewlet;

  widthBorder:number;


  constructor() { }

  ngOnInit() {
    this.widthBorder= this.jqxDataTableObjectChild.width - 30;
  }

  getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    columns: any[] =
    [
        { text: 'First Name', dataField: 'First Name', width: 200 },
        { text: 'Last Name', dataField: 'Last Name', width: 200 },
        { text: 'Product', dataField: 'Product', width: 250 },
        { text: 'Unit Price', dataField: 'Price', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { text: 'Quantity', dataField: 'Quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n' }
    ];

}
