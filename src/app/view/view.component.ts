import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { View } from '../../models/view.model';
import { Viewlet } from '../../models/viewlet.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viiew:string;

  viewParent:View;

  jqxChart:boolean=false;

  jqxDataTable:boolean=false;

  jqxGrid:boolean=false;

  jqxTextArea:boolean=false;

  jqxTree:boolean=false;

  jqxTreeMap:boolean=false;

  jqxChartObject:Viewlet;

  jqxDataTableObject:Viewlet;

  jqxGridObject:Viewlet;

  jqxTextAreaObject:Viewlet;

  jqxTreeObject:Viewlet;

  jqxTreeMapObject:Viewlet;

  jqxTextAreaObjectChild:Viewlet;

  jqxChartObjectChild:Viewlet;

  jqxGridObjectChild:Viewlet;

  jqxTreeObjectChild:Viewlet;

  jqxTreeMapObjectChild:Viewlet;

  jqxDataTableObjectChild:Viewlet;

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //convert the object sent in the url by data component
    this.route.params.forEach((params: Params) => { 
      this.viiew = params['view'];
      this.viewParent=JSON.parse(this.viiew);
    });

    //check the exiting viewlets in the object sented by data component
    for (var x in this.viewParent.viewletName) {
      
      if(this.viewParent.viewletName[x].viewletType == "jqxChart"){
        this.jqxChart=true;
        this.jqxChartObject=this.viewParent.viewletName[x];
      }
      else if(this.viewParent.viewletName[x].viewletType == "jqxTextArea"){
        this.jqxTextArea=true;
        this.jqxTextAreaObject=this.viewParent.viewletName[x];
      }
      else if(this.viewParent.viewletName[x].viewletType == "jqxDataTable"){
        this.jqxDataTable=true;
        this.jqxDataTableObject=this.viewParent.viewletName[x];
      }
      else if(this.viewParent.viewletName[x].viewletType == "jqxGrid"){
        this.jqxGrid=true;
        this.jqxGridObject=this.viewParent.viewletName[x];
      }
      else if(this.viewParent.viewletName[x].viewletType == "jqxTree"){
        this.jqxTree=true;
        this.jqxTreeObject=this.viewParent.viewletName[x];
      }
      else if(this.viewParent.viewletName[x].viewletType == "jqxTreeMap"){
        this.jqxTreeMap=true;
        this.jqxTreeMapObject=this.viewParent.viewletName[x];
      }
    }

    
  }

}
