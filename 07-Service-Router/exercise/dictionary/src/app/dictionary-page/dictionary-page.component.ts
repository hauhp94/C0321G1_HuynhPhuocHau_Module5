import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';
import {IWord} from '../model/iword';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: IWord[];

  constructor(private dictionaryServiceService: DictionaryServiceService) {
    this.wordList = this.dictionaryServiceService.findAll();
  }

  ngOnInit(): void {
  }

}
