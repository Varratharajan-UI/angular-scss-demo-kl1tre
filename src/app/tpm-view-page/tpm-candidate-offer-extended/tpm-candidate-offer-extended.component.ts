import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpm-candidate-offer-extended',
  templateUrl: './tpm-candidate-offer-extended.component.html',
  styleUrls: ['./tpm-candidate-offer-extended.component.scss']
})
export class TpmCandidateOfferExtendedComponent implements OnInit {
  public joiningStatusOption = false;
  constructor() { }

  ngOnInit() {
  }
  openOption() {
    this.joiningStatusOption = !this.joiningStatusOption;
  }
}