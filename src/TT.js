var makeTTDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="rainbow"></span>');
  this.$node = $('<img class="gif" src="giphy.gif">');
  this.setPosition();
};

makeTTDancer.prototype = Object.create(makeDancer.prototype);

makeTTDancer.prototype.constructor = makeTTDancer;

makeTTDancer.prototype.step = function() {
  // makeDanceTTrototype.setPosition.call(this);
  makeDancer.prototype.step.call(this);

  this.$node.show();

};
