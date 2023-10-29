import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results: Location[] = [];
  originalResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: [],
      showClosed: [true],
    })

    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.originalResults = data.locations;
    })
  }

  onSubmit() {
    if (this.formGroup.value.showClosed) {
      this.results = this.originalResults
    } else {
      this.results = this.originalResults.filter(result => result.opened)
    }
  }

  onClean() {
    this.formGroup.reset();
  }
}
