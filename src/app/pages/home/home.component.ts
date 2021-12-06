import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

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

  @ViewChild('drawer') drawer: ElementRef;
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
    var scroll = window.pageYOffset
    //console.log(this.isMobile, scroll); // this will console log our scroll position
    if (!this.isMobile && scroll > 350) {
      this.showTitle = true
      this.navbarColor = this.isDarkMode ? 'white' : 'black'
      this.navbarBgColor = this.isDarkMode ? 'black' : 'white'
      //console.log(this.showTitle)
    } if (this.isMobile && scroll > 40) {
      this.showTitle = true
      this.navbarColor = this.isDarkMode ? 'white' : 'black'
      this.navbarBgColor = this.isDarkMode ? 'black' : 'white'
    } else if (!this.isMobile && scroll < 350 || this.isMobile && scroll < 40) {
      this.showTitle = false
      this.navbarColor = this.isDarkMode ? 'white' : 'black'
      this.navbarBgColor = 'rgba(0, 0, 0, 0)'
    }
  }

  ngOnInit(): void {
    this.calculateAge()
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
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
