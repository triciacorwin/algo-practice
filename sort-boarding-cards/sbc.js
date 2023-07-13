// boarding card constructor
class BoardingCard {
  constructor(origin, destination, transportation, seatAssignment, otherDetails) {
    this.origin = origin;
    this.destination = destination;
    this.transportation = transportation;
    this.seatAssignment = seatAssignment;
    this.otherDetails = otherDetails;
  }
}

// an array of boarding cards
const boardingCards = [
  new BoardingCard('Barcelona', 'Gerona Airport', 'airport bus', null, null),
  new BoardingCard('Stockholm', 'New York JFK', 'flight SK22', '7B', 'Baggage will be automatically transferred from your last leg'),
  new BoardingCard('Madrid', 'Barcelona', 'train 78A', '45B', null),
  new BoardingCard('Gerona Airport', 'Stockholm', 'flight SK455', '3A', 'Baggage drop at ticket counter 344')
];


// implement a function with sorting algo to arrange the boarding cards in the correct order
function sortCards (cards) {
  const sortedCards = [];
  const origins = {};
  const destinations = {};
  const length = cards.length;

  // declare object "origins" & "destingations" with all origins & destinations and their matching cards as key-value pair
  for (const card of cards) {
    origins[card.origin] = card;
  }

  for (const card of cards) {
    destinations[card.destination] = card;
  }

  // find first card, which is the location (key) that is not in destinations object
  let currentCard = cards.find(card => !destinations[card.origin]);

  // sort cards
  while (sortedCards.length < length) {
    sortedCards.push(currentCard);
    currentCard = origins[currentCard.destination]
  }
  
  console.log(sortedCards);

  return sortedCards;
}


// iterate over the sorterd cards and print the description
function printCards (sortedCards) {
  for (const card of sortedCards) {
    let description = `Take ${card.transportation} from ${card.origin} to ${card.destination}.`;
    if (card.seatAssignment) {
      description += ` Sit in seat ${card.seatAssignment}.`;
    }
    if (card.otherDetails) {
      description += ` ${card.otherDetails}`;
    }
    console.log(description);
  }
}


printCards(sortCards(boardingCards));


