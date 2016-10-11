import { Component } from '@angular/core';

import { Workbook } from './../entities/Workbook';
import { Note } from './../entities/Note';

@Component({
  selector: 'my-app',
  template: `
            <div class="container-fluid">
              <div *ngFor="let book of books">
                <div class="row">
                  <div class="col-md-2 note-container">
                    <div class="workbook-summary">
                      <h4>{{ book.name }}</h4>
                    </div>
                  </div>
                  <div class="col-md-3 note-container">
                    <div *ngFor="let note of book.notes">
                      <div class="note-summary">
                        <h4>{{ note.title }}</h4>
                        <p>{{ note.content }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
            `
})

export class WorkbookView { 
    title = 'Workbook';
    books: Workbook[] = [
      {
        id: 1,
        name: 'Default',
        notes: [
          { id: 1, title: 'Note1', tags: '', content: 'Bacon ipsum dolor amet t-bone porchetta pork tail leberkas swine, pork chop corned beef. Jerky ribeye tenderloin, leberkas strip steak andouille shoulder ham hock. Short loin tri-tip shank beef ribs shankle capicola. Flank leberkas corned beef capicola shank brisket boudin pork chop meatloaf pig pastrami shankle. Brisket ham swine, beef jerky shankle filet mignon.' },
          { id: 2, title: 'Note2', tags: '', content: 'Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!' }
        ]
      }
    ]
}
