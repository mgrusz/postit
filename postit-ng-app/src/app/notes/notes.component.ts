import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Note } from '../notes/model/note';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  notes: Note[] = null;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getAllNotes();
  }

  public getAllNotes() {
    this.commonService.getAllNotes().subscribe(data => this.notes = data);
  }

  public createNote() {
    const newNote: Note = {
      id: null,
      name: 'Note',
      text: '',
      modifDate: null
    };
    this.commonService.createNote(newNote).subscribe((res: Note) => this.notes.push(res));
  }

    public updateNote(note: Note) {
    this.commonService.updateNote(note).subscribe((res: Note) => note.modifDate = res.modifDate);
  }

  public deleteNote(note: Note) {
    if (confirm('Are you sure you want to delete ' + note.name + ' ?')) {
      this.commonService.deleteNote(note.id)
        .subscribe(() => {
         const index = this.notes.indexOf(note);
         if (index > -1 ) {
            this.notes.splice(index, 1);
          }
        });
    }
  }
}
