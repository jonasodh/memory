import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
  constructor() {
  }

  cardsList = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
  cards = document.getElementsByClassName("mem-card");
  flippedCardsList = []
  matchedCardsList = [];

  //shuffle cards
  shuffle(): void {
    this.cardsList.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].innerHTML = this.cardsList[i];
    }
    this.memory();
  }

  memory(): void {
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].addEventListener('click', () => {
        //add flipped class on click
        this.cards[i].classList.add('flipped');

        //flipping cards & adding 'shown' class to matching cards

        // @ts-ignore
        this.flippedCardsList.push(this.cards[i].innerHTML);
        if (this.flippedCardsList[0] === this.cards[i].innerHTML && this.flippedCardsList[1] === this.cards[i].innerHTML) {
          document.querySelectorAll(".flipped").forEach(el => el.classList.add("shown"));
        }
        console.log('flipped cards -> ', this.flippedCardsList);

        if (this.flippedCardsList.length === 2) {
          //compare flipped cards
          if (this.flippedCardsList[0] === this.flippedCardsList[1] && !this.matchedCardsList.includes(this.flippedCardsList[0])) {
            //een match :D
            this.matchedCardsList.push(this.flippedCardsList[0], this.flippedCardsList[1]);
          }

          //reset flipped cards
          setTimeout(() => {
            document.querySelectorAll(".flipped").forEach(el => el.classList.remove("flipped"));
          }, 500);
          this.flippedCardsList = [];
          console.log('emptied flippedCardsList ->', this.flippedCardsList);
          console.log('matchedCardsList ->', this.matchedCardsList);
        }
        if (this.matchedCardsList.length === 8) {
          this.win();
        }
      });
    }
  }
  win(): void {
    let won = document.getElementById('won');
    if (won) {
      won.classList.add('show-won');
    }
    console.log('you won');
  }
  ngOnInit(): void {
    this.shuffle();
  }
}
