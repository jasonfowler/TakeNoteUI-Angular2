import { Component } from '@angular/core';

import { Workbook } from './../entities/Workbook';
import { Note } from './../entities/Note';

@Component({
  selector: 'my-app',
  template: `
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-2 workbook-container">
                  <div class="note-buttons-workbook">
                    <div class="btn-group btn-group-justified" role="group" aria-label="...">
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                        </button>
                      </div>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                        </button>
                      </div>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div *ngFor="let book of books" [class.selectedBook]="book === selectedBook" (click)="onSelectBook(book)">
                    <div class="workbook-summary">
                      <h4>{{ book.name }}</h4>
                    </div>
                  </div> 
                </div>   
                <div class="col-md-3 note-container">
                  <div class="note-buttons">
                    <div class="btn-group btn-group-justified" role="group" aria-label="...">
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" aria-label="Add Note"></span>
                        </button>
                      </div>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-remove-sign" aria-hidden="true" aria-label="Delete Note"></span>
                        </button>
                      </div>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">
                          <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true" aria-label="Save"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div *ngIf="selectedBook">
                    <div *ngFor="let note of selectedBook.notes" [class.selectedNote]="note === selectedNote" (click)="onSelectNote(note)">
                      <div class="note-summary">
                        <h4>{{ note.title }}</h4>
                        <p>{{ note.content.substr(0, 150) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div *ngIf="selectedNote">
                    <div class="note-detail form-group">
                      <input [(ngModel)]="selectedNote.title" class="form-control" placeholder="Title">
                      <input [(ngModel)]="selectedNote.tags" class="form-control" placeholder="Tags">
                      <div class="note-buttons-detail">
                        <div class="btn-group btn-group-justified" role="group" aria-label="...">
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default">
                              <span class="glyphicon glyphicon-text-size" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default">
                              <span class="glyphicon glyphicon-text-color" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default">
                              <span class="glyphicon glyphicon-text-background" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default">
                              <span class="glyphicon glyphicon-bold" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default">
                              <span class="glyphicon glyphicon-italic" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default">
                              <span class="glyphicon glyphicon-picture" aria-hidden="true"></span>
                            </button>
                          </div>
                          <div class="btn-group" role="group">
                            <button type="button" class="btn btn-default">
                              <span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <textarea [(ngModel)]="selectedNote.content" class="form-control"></textarea>
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
