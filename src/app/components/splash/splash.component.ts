import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from 'src/app/services/splash-screen-state.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit{
  // The screen starts with the maximum opacity
opacityChange = 1;

splashTransition = "";

// First access the splash is visible
showSplash = true;

readonly ANIMATION_DURATION = 1;
  constructor(private splashScreenStateService: SplashScreenStateService) {}

  ngOnInit(): void {
    // Somewhere the stop method has been invoked
    this.splashScreenStateService.subscribe(res => {
      res ? 
      this.showSplashAnimation():
      this.hideSplashAnimation(); 
    });
 }

 private showSplashAnimation() {
  this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
  this.opacityChange = 1;
  this.showSplash = true;
 }

  private hideSplashAnimation() {
    // Setting the transition
    this.splashTransition = `opacity ${this.ANIMATION_DURATION}s`;
    this.opacityChange = 0;
    
    setTimeout(() => {
       this.showSplash = false;
    }, 1000);
 }
}
