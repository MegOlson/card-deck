$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();

    var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

    cards.forEach(function(card) {
      var clubs = $(card + " of clubs");
      var hearts = $(card + " of hearts");
      var diamonds = $(card + " of diamonds");
      var spades = $(card + " of spades");
      cards.forEach(function(card){
        $("#clubs").append(clubs);
        $("#hearts").append(hearts);
        $("#diamonds").append(diamonds)
        $("#spades").append(spades);
      });
    });
  });
});
// var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
// var suits = [diamonds, spades, hearts, clubs];
//    cards.forEach(function(card) {
//     suits.forEach(function(suit) {
//     	var result = $(card + suit);
//    });
// 	});
//   alert(result);
