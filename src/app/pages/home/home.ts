import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  displayedText = signal('');
  fullText = 'Hi, I\'m Dario Meštrović';
  typingSpeed = 100;
  currentIndex = 0;
  
  roles = signal(0);
  rolesList = ['Frontend Developer', 'CMS Specialist', 'Tech Lead'];
  
  ngOnInit() {
    this.startTyping();
    this.startRoleAnimation();
  }

  startTyping() {
    const typeInterval = setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.displayedText.update(text => text + this.fullText[this.currentIndex]);
        this.currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, this.typingSpeed);
  }

  startRoleAnimation() {
    setInterval(() => {
      this.roles.update(index => (index + 1) % this.rolesList.length);
    }, 3000);
  }
}
