import { AfterViewInit, Component, ViewChildren, QueryList, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invitation';
  @ViewChild('childDiv') childDiv!: ElementRef;
  @ViewChild('childDiv2') childDiv2!: ElementRef;
  @ViewChild('parentDiv') parentDiv!: ElementRef;

  constructor(private renderer: Renderer2){}

  open() {
    const element = document.getElementById('envelope');

    if (element) {
      element.classList.add('open');
      element.classList.remove('close');
    }

    if (element) {
      setTimeout(() => {
        element.classList.add('my-class');
      }, 1000);

    }

  }

  close() {
    const element = document.getElementById('envelope');
    if (element) {
      element.classList.add('close');
      element.classList.remove('open');
    }
  }


  playSound() {
    let audio = new Audio();
    audio.src = '../assets/turn.mp3'; // Path to your sound file
    audio.load();
    audio.play();
  }

  click1() {
    const element = document.getElementById('page1');
    const element2 = document.getElementById('page2');

    if (element) {
      element.classList.toggle('flipped');

      const child = this.childDiv.nativeElement;
      const child2 = this.childDiv2.nativeElement;
      const parent = this.parentDiv.nativeElement;

      this.renderer.removeClass(parent, 'active-parent');

      // Then, conditionally add it later after DOM has updated
      setTimeout(() => {
        if (child.classList.contains('flipped') && !child2.classList.contains('flipped')) {
          this.renderer.addClass(parent, 'active-parent');
        }
      }, 600);
    }

    if (element2) {
      element2.classList.remove('incz');

    }
  }

  click2() {
    const element = document.getElementById('page2');
    const element1 = document.getElementById('page1');

    if (element) {
      element.classList.toggle('flipped');
      element.classList.add('incz');

      const child = this.childDiv.nativeElement;
      const child2 = this.childDiv2.nativeElement;
      const parent = this.parentDiv.nativeElement;

      // Always remove active-parent immediately
      this.renderer.removeClass(parent, 'active-parent');

      // Re-evaluate after 600ms (post DOM updates)
      setTimeout(() => {
        if (!(child.classList.contains('flipped') && child2.classList.contains('flipped'))) {
          this.renderer.addClass(parent, 'active-parent');
        }
      }, 600);
    }
    if (element1) {
      element1.classList.add('incz');

    }
  }
}
