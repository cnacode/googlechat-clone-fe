import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@app/core/models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Observable<Message[]>;
  private replies: Observable<Message[]>;

  constructor(private http: HttpClient) {}
}
