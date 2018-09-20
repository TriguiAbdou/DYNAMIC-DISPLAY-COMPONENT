import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { View } from '../../models/view.model';
import { Viewlet } from '../../models/viewlet.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  message:String;

  jsonText:any;

  viiew:View;

  validateExisting:String;

  validateAllFields:String;

  constructor(private router: Router) { }

  ngOnInit() {
    //at the beginning does not display the part of the error message
    document.getElementById("alertDiv").style.display = "none";
  }
  
  //validation of the data entered
  jsonValidation(){
    try {
      //initilization
      this.validateAllFields="true";
      this.validateExisting="true";
      this.message="";
      //verification of jsonformat
      this.viiew = JSON.parse(this.jsonText);
      //verification the exesting of the viewlets type 
      for (var x in this.viiew.viewletName) {
        if ((this.viiew.viewletName[x].viewletType != "jqxBarGauge")&&(this.viiew.viewletName[x].viewletType!="jqxChart")&&(this.viiew.viewletName[x].viewletType!="jqxTextArea")&&(this.viiew.viewletName[x].viewletType!="jqxDataTable")&&(this.viiew.viewletName[x].viewletType!="jqxTreeMap")&&(this.viiew.viewletName[x].viewletType!="jqxTree")&&(this.viiew.viewletName[x].viewletType!="jqxGrid")) {
            this.validateExisting="false";
        }
      }
      if (this.validateExisting =="false"){
        this.message="This type of viewlets is not supported";
        document.getElementById("alertDiv").style.display = "";
      }
      //verification that all attributes are filled
      for (var x in this.viiew.viewletName) {
        if ((this.viiew.viewletName[x].name==undefined)||(this.viiew.viewletName[x].viewletType==undefined)||(this.viiew.viewletName[x].width==undefined)||(this.viiew.viewletName[x].vPos==undefined)||(this.viiew.viewletName[x].hPos==undefined)||(this.viiew.viewletName[x].length==undefined)) {
          this.validateAllFields="false";
        }
      }
      if (this.validateAllFields=="false"){
        document.getElementById("alertDiv").style.display = "";
        this.message= "Please filled all attributes";
      }
      //redirection if everything is good
      if((this.validateExisting =="true")&&(this.validateAllFields=="true")){
        this.router.navigate(['/test',this.jsonText]);      
      }
    } catch (e) {
      //launch the alert if the Json format is incorrect
      document.getElementById("alertDiv").style.display = "";
      this.message="The JSON format is incorrect";
    }
  }

}
