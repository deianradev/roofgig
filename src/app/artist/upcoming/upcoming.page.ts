import { Component, OnInit } from '@angular/core';
import { UpcomingService } from './services/upcoming.service';
import { UpcomingGig } from '../shared/models/upcomingGig.model';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  upcomingGigs: UpcomingGig[];
  constructor(private upcomingGigService: UpcomingService) {

  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.upcomingGigs = this.upcomingGigService.upcomingGigs;
  }
}
