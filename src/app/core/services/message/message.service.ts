import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Message } from '@app/core/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messages: BehaviorSubject<Message[]>;
  private replies: BehaviorSubject<Message[]>;

  constructor(private http: HttpClient) {
    this.messages = new BehaviorSubject<Message[]>([]);
    this.replies = new BehaviorSubject<Message[]>([]);
  }

  getMessages(page) {
    const limit = 25;
    return this.http.get<any>(`${environment.apiUrl}/message?page=${page}&limit=${limit}`).pipe(
      catchError(response => {
        return throwError(response.error.message);
      }),
      tap(response => {
        const messages: Message[] = response.messages.map(message => ({
          ...message,
          id: message._id,
          createdAt: new Date(message.createdAt).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          owner: `${message.owner.firstName} ${message.owner.lastName} (${message.owner.username})`
        }));
        response.messages = messages;
        this.messages.next(response);
        return response;
      })
    );
  }

  getReplies(messageId) {
    return this.http.get<any>(`${environment.apiUrl}/message/reply/${messageId}`).pipe(
      catchError(response => {
        return throwError(response.error.message);
      }),
      tap(response => {
        const messages: Message[] = response.messages.map(message => ({
          ...message,
          id: message._id,
          createdAt: new Date(message.createdAt).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          owner: `${message.owner.firstName} ${message.owner.lastName} (${message.owner.username})`
        }));
        response.messages = messages;
        this.replies.next(response.messages);
        return response.messages;
      })
    );
  }

  createMessage(body, parentId = '') {
    return this.http
      .post<any>(`${environment.apiUrl}/message`, { body, parentId })
      .pipe(
        catchError(response => {
          return throwError(response.error.message);
        }),
        tap(response => {
          this.getMessages(0);
        })
      );
  }

  public get messagesValue() {
    return this.messages.value;
  }

  public watch(onChange) {
    this.messages.subscribe(onChange);
  }
}
