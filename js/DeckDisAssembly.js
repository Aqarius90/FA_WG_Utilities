Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function CardDelete(ID)
{
    var sD  = "DeckView.D" +ID;
    var sL  = "DeckView.L" +ID;
    var sD0 = "DetailView.D0" +ID;
    var sL0 = "DetailView.L0" +ID;
    ractiveDeck.set(sD, "");
    ractiveDeck.set(sD0, "");
    ractiveDeck.set(sL, "");
    ractiveDeck.set(sL0, "");

    for (var j = 0; j< Deck.Cards3T.length; j++) {
        if (Deck.Cards3T[j].iArrayIndex == ID)
        {
            Deck.Cards3T.remove(j);
            Deck.Cards3Count--;
        }
    }
    for (var j = 0; j< Deck.Cards2T.length; j++) {
        if (Deck.Cards2T[j].iArrayIndex == ID)
        {
            Deck.Cards2T.remove(j);
            Deck.Cards2Count--;
        }
    }
    for (var j = 0; j< Deck.Cards1T.length; j++) {
        if (Deck.Cards1T[j].iArrayIndex == ID)
        {
            Deck.Cards1T.remove(j);
            Deck.Cards1Count--;
        }
    }
    GUIDisplay();
    DeckExport();
}
