import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BonosreportsService } from 'src/app/services/bonosreports.service';

@Component({
  selector: 'app-bonosreports',
  templateUrl: './bonosreports.component.html',
  styleUrls: ['./bonosreports.component.scss']
})
export class BonosreportsComponent implements OnInit {

  search: string = '';
  searchForm: FormGroup;
  customerbonos: any;
  

  constructor(private readonly brs: BonosreportsService,
    private activateRoute: ActivatedRoute,
    public fb: FormBuilder) { }

    _getBonosReportsbyDoc(doc: any) {
      this.brs._getBonosReportsbyDoc(doc).subscribe((rest: any) => {
        this.customerbonos = rest.data;
        console.log(this.customerbonos);
      })
    }

    ngOnInit(): void {  
      this.searchForm = this.fb.group({
        search: [this.search]
      });
    }

    submitForm() {
      const doc = this.searchForm.get('search')?.value;
      this._getBonosReportsbyDoc(doc);
    }
}
