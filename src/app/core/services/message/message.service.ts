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
    let storedMessages = localStorage.getItem('messages');
    if (storedMessages === 'undefined') {
      storedMessages = JSON.stringify([]);
    }
    this.messages = new BehaviorSubject<Message[]>(JSON.parse(storedMessages));
  }

  getMessages() {
    return this.http.get<any>(`${environment.apiUrl}/message`).pipe(
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
        localStorage.setItem('messages', JSON.stringify(messages));
        this.messages.next(response);
        return response;
      })
    );
  }

  getReplies(messageId) {
    return this.http.get<any>(`${environment.apiUrl}/message/replies/${messageId}`).pipe(
      catchError(response => {
        return throwError(response.error.message);
      }),
      tap(response => {
        const replies: Message[] = response.replies;
        this.replies.next(response);
        return response;
      })
    );
  }

  createMessage(body, messageId?) {
    return this.http
      .post<any>(`${environment.apiUrl}/message/${messageId}`, { body })
      .pipe(
        catchError(response => {
          return throwError(response.error.message);
        }),
        tap(response => {
          if (messageId) {
            const replies: Message[] = response.replies;
            localStorage.setItem('replies', JSON.stringify(replies));
            this.replies.next(replies);
            return replies;
          }
          const messages: Message[] = response.messages;
          localStorage.setItem('messages', JSON.stringify(messages));
          this.replies.next(messages);
          return messages;
        })
      );
  }

  public get messagesValue() {
    return this.messages.value;
  }
}
