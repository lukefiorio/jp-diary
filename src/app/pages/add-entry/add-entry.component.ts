import { Component, OnInit } from '@angular/core';
import { EntryData } from '../../services/interface.service';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss'],
})
export class AddEntryComponent implements OnInit {
  // validate which of these fields we actually need
  // will also need to accommodate entries vs sub-entries
  // this currently does not
  // FIX: need to add subEntries key (which will be an array of objects)
  newEntry: EntryData = {
    id: 0,
    created_by: 0,
    entry_id: 0,
    language: 'Japanese',
    date: new Date(),
    body: '',
  };
  constructor(private backend: BackendService) {}

  ngOnInit() {}

  submit() {
    this.backend.addEntry(this.newEntry).then((data: EntryData) => {
      this.newEntry = data;

      // setTimeout(() => (this.toggleClass = true), 400);
    });
  }
}
