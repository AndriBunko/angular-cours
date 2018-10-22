import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {BookModel} from '../../products/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class ComunicatorService {
  private channel = new Subject<BookModel>();
  public channel$ = this.channel.asObservable();

  publishData(data: BookModel) {
    this.channel.next(data);
  }
}
