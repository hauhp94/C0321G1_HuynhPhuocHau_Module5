import {Injectable} from '@angular/core';
import {IWord} from './model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  constructor() {
  }

  wordList: IWord[] = [
    {word: 'yellow', mean: 'vang'},
    {word: 'red', mean: 'do'},
    {word: 'sun', mean: 'mat troi'},
    {word: 'moon', mean: 'mat trang'}
  ];

  translate(word: string): IWord {
    return this.wordList.find(wordObj => wordObj.word === word);
  }

  findAll(): IWord[] {
    return this.wordList;
  }
}
