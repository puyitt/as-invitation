import { AfterViewInit, Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invitation';
  // @ViewChildren('page') pages!: QueryList<ElementRef>;


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


  // images: string[] = [
  //   '../assets/1.JPG',
  //   '../assets/2.JPG',
  //   '../assets/3.JPG',
  //   '../assets/4.JPG'
  // ];

  // ngAfterViewInit() {
  //   const pagesArray = this.pages.toArray().map(el => el.nativeElement);

  //   // Set zIndex for even pages
  //   pagesArray.forEach((page, i) => {
  //     if (i % 2 === 0) {
  //       page.style.zIndex = (pagesArray.length - i).toString();
  //     }
  //     page.dataset.pageNum = (i + 1).toString();
  //   });
  // }

  // onPageClick(event: Event) {
  //   const page = event.target as HTMLElement | null;

  //   if (!page) return; // Ensure it's not null

  //   const pageNum = Number(page.dataset['pageNum']);

  //   if (pageNum % 2 === 0) {
  //     page.classList.remove('flipped');
  //     (page.previousElementSibling as HTMLElement)?.classList.remove('flipped');
  //   } else {
  //     page.classList.add('flipped');
  //     (page.nextElementSibling as HTMLElement)?.classList.add('flipped');
  //   }
  // }

  click1() {
    const element = document.getElementById('page1');
    const element2 = document.getElementById('page2');

    if (element) {
      element.classList.toggle('flipped');
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

    }
    if (element1) {
      element1.classList.add('incz');

    }
  }
}
