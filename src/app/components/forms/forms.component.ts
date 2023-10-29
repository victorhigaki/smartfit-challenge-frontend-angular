import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  results = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unidadesService: UnidadesService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: [],
      showClosed: [false],
    })

    this.unidadesService.get().subscribe((res) => {
      console.log(res);
    })
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  onClean() {
    this.formGroup.reset();
  }
}
