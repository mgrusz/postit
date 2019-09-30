import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../notes/model/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private MAIN_URL = 'http://localhost:8080/notes';
  private NOTE_ALL_URL = this.MAIN_URL + '/all';
  private NOTE_CREATE_URL = this.MAIN_URL;
  private NOTE_DELETE = this.MAIN_URL + '/';
  private NOTE_UPDATE = this.MAIN_URL;

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.NOTE_ALL_URL);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.NOTE_CREATE_URL, note);
  }

  deleteNote(note: Note | number): Observable<Note> {
    const id = typeof note === 'number' ? note : note.id;
    const url = `${this.NOTE_DELETE}${id}`;
    return this.http.delete<Note>(url);
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.NOTE_UPDATE, note);
  }

}
