import { Component } from '@angular/core';

import { Workbook } from './../entities/Workbook';
import { Note } from './../entities/Note';

@Component({
  selector: 'my-app',
  template: `
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-2 workbook-container">
                  <div *ngFor="let book of books" [class.selected]="book === selectedBook" (click)="onSelectBook(book)">
                    <div class="workbook-summary">
                      <h4>{{ book.name }}</h4>
                    </div>
                  </div> 
                </div>   
                <div class="col-md-3 note-container">
                  <div *ngIf="selectedBook">
                    <div *ngFor="let note of selectedBook.notes" (click)="onSelectNote(note)">
                      <div class="note-summary">
                        <h4>{{ note.title }}</h4>
                        <p>{{ note.content.substr(0, 150) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div *ngIf="selectedNote">
                    <div class="note-detail">
                      <h4>{{ selectedNote.title }}</h4>
                      <p>{{ selectedNote.tags }}</p>
                      <p>{{ selectedNote.content }}</p>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
            `
})

export class WorkbookView { 
    title = 'Workbook';
    selectedBook: Workbook;
    selectedNote: Note;
    books: Workbook[] =[
      {
        id: 1,
        name: 'Default',
        notes: [
          { id: 1, title: 'Note1', tags: 'abc', content: 'Bacon ipsum dolor amet t-bone porchetta pork tail leberkas swine, pork chop corned beef. Jerky ribeye tenderloin, leberkas strip steak andouille shoulder ham hock. Short loin tri-tip shank beef ribs shankle capicola. Flank leberkas corned beef capicola shank brisket boudin pork chop meatloaf pig pastrami shankle. Brisket ham swine, beef jerky shankle filet mignon.' },
          { id: 2, title: 'Note2', tags: '', content: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!' }
        ]
      },
      {
        id: 2,
        name: 'New',
        notes: [
          { id: 3, title: 'Note3', tags: '', content: 'Bacon ipsum dolor amet t-bone porchetta pork tail leberkas swine, pork chop corned beef. Jerky ribeye tenderloin, leberkas strip steak andouille shoulder ham hock. Short loin tri-tip shank beef ribs shankle capicola. Flank leberkas corned beef capicola shank brisket boudin pork chop meatloaf pig pastrami shankle. Brisket ham swine, beef jerky shankle filet mignon.' }
        ]
      }
    ]

  onSelectBook(book: Workbook): void {
    this.selectedBook = book;
  }

  onSelectNote(note: Note): void {
    this.selectedNote = note;
  }
}
