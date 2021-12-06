import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CampaingsreportsService } from 'src/app/services/campaingsreports.service';

@Component({
  selector: 'app-campaingsreports',
  templateUrl: './campaingsreports.component.html',
  styleUrls: ['./campaingsreports.component.scss']
})
export class CampaingsreportsComponent implements OnInit {

  search: string = '';
  searchForm: FormGroup;

  customercampaings: any[] = [];

  constructor(private readonly crs: CampaingsreportsService,
    private activateRoute: ActivatedRoute,
    public fb: FormBuilder) { }

  _getCampaingsReportsbyDoc(doc: any) {
    this.crs._getCampaingsReportsbyDoc(doc).subscribe((rest: any) => {
      this.customercampaings = rest.data;
      console.log(this.customercampaings);
    })
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [this.search]
    });
  }

  submitForm() {
    const doc = this.searchForm.get('search')?.value;
    this._getCampaingsReportsbyDoc(doc);
  }
  
}
