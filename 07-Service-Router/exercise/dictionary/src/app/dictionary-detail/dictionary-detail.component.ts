import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/iword';
import {ActivatedRoute} from '@angular/router';
import {DictionaryServiceService} from '../dictionary-service.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;

  constructor(private dictionaryServiceService: DictionaryServiceService,
              private activatedRoute: ActivatedRoute) {
    const wordTranslate = this.activatedRoute.snapshot.params.word;
    this.word = this.dictionaryServiceService.translate(wordTranslate);
  }

  ngOnInit(): void {
  }

}
