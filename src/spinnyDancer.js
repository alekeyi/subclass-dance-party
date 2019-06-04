var makeGifDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="rainbow"></span>');
  this.$node = $('<img class="gif bounce" src="gw-dance.gif">');
  this.setPosition();
};

makeGifDancer.prototype = Object.create(makeDancer.prototype);

makeGifDancer.prototype.constructor = makeGifDancer;

makeGifDancer.prototype.step = function() {
  // makeDancer.prototype.setPosition.call(this);
  makeDancer.prototype.step.call(this);

  this.$node.show();

};
