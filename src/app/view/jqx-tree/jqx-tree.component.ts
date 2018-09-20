import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { Viewlet } from '../../../models/viewlet.model';

@Component({
  selector: 'app-jqx-tree',
  templateUrl: './jqx-tree.component.html',
  styleUrls: ['./jqx-tree.component.css']
})
export class JqxTreeComponent implements OnInit {

    widthBorder:number;

    leftLabel:number;

    @Input()
  jqxTreeObjectChild:Viewlet;


  constructor() { }

  ngOnInit() {
    this.widthBorder= this.jqxTreeObjectChild.width - 30;
    this.leftLabel=this.jqxTreeObjectChild.width/2;
  }

  @ViewChild('treeReference') tree: jqxTreeComponent;
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.tree.selectItem(null);
        });
    }
    treeSource: any[] =
    [
        {
             label: "Mail", expanded: true,
            items:
            [
                { label: "Calendar" },
                { label: "Contacts", selected: true }
            ]
        },
        {
            label: "Inbox", expanded: true,
            items:
            [
                { label: "Admin" },
                { label: "Corporate" },
                { label: "Finance" },
                { label: "Other" },
            ]
        },
        { label: "Deleted Items" },
        { label: "Notes" },
        { label: "Settings" },
        { label: "Favorites" }
    ];

}
