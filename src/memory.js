class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
this.pairsGuessed = 0;


  }

  shuffleCards() {

    if(!this.cards){
return undefined;
    }
   
      for (let i = array.length -1; i >0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
      
    
   return this.cards;
    }

  checkIfPair(card1, card2) {
    if(card1 !== card2){
      this.pairsClicked += 1;
      return false;
    } else {
      this.pairsGuessed += 1;
      return true;
    }

  }

  checkIfFinished() {

    if(this.pairsGuessed === this.cards.length/2){
return true;
    } else {
      return false;
    }
    }
}
