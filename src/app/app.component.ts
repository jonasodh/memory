import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memory';
//old code
  //set card state onclick
  // setCardState(): void {
  //   for (let i = 0; i < this.card.length; i++) {
  //     this.card[i].addEventListener('click', () => {
  //         if (!this.card[i].classList.contains('turning')) {
  //           // @ts-ignore
  //           this.turnedCards.push(this.card[i].innerHTML);
  //           this.card[i].classList.add('turning');
  //           if (this.turnedCards.length === 2) {
  //             this.compareCards();
  //           }
  //         } else {
  //           this.card[i].classList.remove('turning');
  //         }
  //     });
  //   }
  // }
  //
  // compareCards(): void {
  //   if (this.turnedCards.length === 2) {
  //     if (this.turnedCards[0] === this.turnedCards[1]) {
  //       this.wonCards.push(this.turnedCards[0], this.turnedCards[1]);
  //       for (let i = 0; i < this.turnedCard.length; i++) {
  //         this.turnedCard[i].classList.add('shown');
  //         this.card[i].classList.remove('turning');
  //         console.log(this.turnedCard);
  //       }
  //       this.turnedCards = [];
  //       console.log('match! ->', this.wonCards, 'turned cards ->', this.turnedCards.length);
  //     }
  //     if (this.wonCards.length === 8) {
  //       this.win();
  //     }
  //   } else {
  //     this.turnedCards = [];
  //   }
  // }


}
