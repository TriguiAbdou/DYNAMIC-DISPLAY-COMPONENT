import { Component, OnInit, Input } from '@angular/core';
import { Viewlet } from '../../../models/viewlet.model';

@Component({
  selector: 'app-jqx-text-area',
  templateUrl: './jqx-text-area.component.html',
  styleUrls: ['./jqx-text-area.component.css']
})
export class JqxTextAreaComponent implements OnInit {

  @Input()
  jqxTextAreaObjectChild:Viewlet;

  widthBorder:number;

  leftLabel:number;

  lengthBorder:number;

  constructor() { }

  ngOnInit() {
    this.widthBorder=this.jqxTextAreaObjectChild.width - 30;
    this.lengthBorder=this.jqxTextAreaObjectChild.length - 80;
    this.leftLabel=this.jqxTextAreaObjectChild.width/2;
  }

  
  generateSource(): string[] {
    let quotes: string[] = [];
    quotes.push('Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.');
    quotes.push('Yesterday is not ours to recover, but tomorrow is ours to win or lose.');
    quotes.push('It does not matter how slowly you go as long as you do not stop.');
    quotes.push('Success depends upon previous preparation, and without such preparation there is sure to be failure.');
    quotes.push('Better a diamond with a flaw than a pebble without.');
    quotes.push('To succeed in life, you need two things: ignorance and confidence.');
    quotes.push('A successful man is one who can lay a firm foundation with the bricks others have thrown at him.');
    quotes.push('Sleep is the best meditation.');
    return quotes;
}

}
