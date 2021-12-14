import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile = false
  navbarOpen = false
  isDarkMode = true
  showTitle = false
  navbarColor = 'white'
  navbarBgColor = 'rgba(0, 0, 0, 0)';
  public birthdate: Date = new Date(1995,3,18);
  public age: number;

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild('experience') experience: ElementRef;
  @ViewChild('aboutme') aboutMe: ElementRef;
  @ViewChild('footer') footer: ElementRef;

  constructor() {
    this.onResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 765
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (!this.drawer.opened) {
      var scroll = window.pageYOffset
      if (!this.isMobile && scroll > 350) {
        this.showTitle = true
        this.navbarColor = this.isDarkMode ? 'white' : '#0055AA'
        this.navbarBgColor = this.isDarkMode ? '#0055AA' : 'white'
        //console.log(this.showTitle)
      } if (this.isMobile && scroll > 40) {
        this.showTitle = true
        this.navbarColor = this.isDarkMode ? 'white' : '#0055AA'
        this.navbarBgColor = this.isDarkMode ? '#0055AA' : 'white'
      } else if (!this.isMobile && scroll < 350 || this.isMobile && scroll < 40) {
        this.showTitle = false
        this.navbarColor = this.isDarkMode ? 'white' : '#0055AA'
        this.navbarBgColor = 'rgba(0, 0, 0, 0)'
      }
    }
  }

  ngOnInit(): void {
    this.calculateAge()
  }

  toggleMenu() {
    //this.navbarOpen = !this.navbarOpen;
    this.drawer.toggle()
    if (this.drawer.opened) {
      this.showTitle = true
      this.navbarColor = 'white'
      this.navbarBgColor = '#0055AA'
    } else {
      this.showTitle = false
      this.navbarColor = 'white'
      this.navbarBgColor = 'rgba(0, 0, 0, 0)'
    }
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode
    this.checkOffsetTop()
  }

  calculateAge(): void {
    if (this.birthdate) {
      var timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

  scrollToAboutMe() {
    setTimeout(() => {
      this.aboutMe.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }, 300);
  }

  scrollToExperience() {
    setTimeout(() => {
      this.experience.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }, 300);
  }

  scrollToContact() {
    setTimeout(() => {
      this.footer.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }, 300);
  }

}
