import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceData } from 'src/app/constants/experience';

@Component({
  selector: 'home-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  allExperiences

  constructor(
    private router: Router,
    private expData: ExperienceData
  ) { }

  ngOnInit(): void {
    this.allExperiences = this.expData.all
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  openPage(id: string) {
    this.router.navigate(['/experience/' + id]);
  }
}
