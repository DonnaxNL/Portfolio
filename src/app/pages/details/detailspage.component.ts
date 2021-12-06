import { Component, HostListener, Inject, isDevMode, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ExperienceData } from 'src/app/constants/experience';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'experience-details',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailsPageComponent implements OnInit {
  isMobile = false
  activeSlide = 0
  slideConfig = {
    interval: 0,
    showIndicators: false,
    isAnimated: true
  };
  itemsPerSlide = 4;
  singleSlideOffset = true;
  experienceId = null;
  allExperiences = null;
  otherExperiences = null;
  currentExperience: Experience = null
  currentStyle = { 
    'background': 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(47, 47, 162, 0.1)), url(/assets/demonth.png) center center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'color': 'white' 
  }

  styleObject(): Object {
    var defaultValues = { 
      'background': 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(47, 47, 162, 0.1)), url(/assets/demonth.png) center center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'color': 'white' 
    }
    return defaultValues
  }

  constructor(
    private router: Router,
    private dataRoute: ActivatedRoute,
    private expData: ExperienceData,
    private dialog: MatDialog
  ) { this.onResize() }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 480
  }

  ngOnInit(): void {
    if (this.experienceId == null) {
      this.experienceId = this.dataRoute.snapshot.paramMap.get('id')
    }

    if (this.experienceId == null || this.experienceId == 'undefined') {
      if (isDevMode()) {
        console.log('id null', this.experienceId);
      }
      this.router.navigate(['/']);
      return;
    }

    this.getExperience()
  }

  getExperience() {
    this.allExperiences = this.expData.all
    this.otherExperiences = new Array()
    this.allExperiences.forEach(item => {
      if (item.id != this.experienceId) {
        this.otherExperiences.push(item)
      }
    });
    this.currentExperience = this.allExperiences.find(x => x.id === this.experienceId)
    this.currentStyle = { 
      'background': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(47, 47, 162, 0.2)), url(" + this.currentExperience.mainImage + ") no-repeat center center",
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'color': this.currentExperience.color
    }
    console.log(this.currentExperience, this.currentStyle)
  }

  openImage(imageUrl: string) {
    this.dialog.open(PopUpImage, {
      panelClass: 'image-dialog-class',
      data: {
        image: imageUrl
      }
    });
  }

  openPage(id: string) {
    this.router.navigate(['/experience/' + id]);
    this.experienceId = id;
    this.getExperience()
  }
}

export interface DialogData {
  image: string;
}

@Component({
  selector: 'image-dialog',
  templateUrl: 'image-dialog.html',
})
export class PopUpImage {

  constructor(
    public dialogRef: MatDialogRef<PopUpImage>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}