var makeRainbowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="rainbow grow"></span>');
  this.setPosition();
};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);

makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.step = function() {
  // makeDancer.prototype.setPosition.call(this);
  makeDancer.prototype.step.call(this);

  this.$node.toggle();

};

// makeRainbowDancer.prototype.setPosition = function(){
// 	makeDancer.prototype.setPosition.call(this);
// }
 //buttal

