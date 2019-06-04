var makeRainbowDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  his.$node = $('<span class="rainbow"></span>');
  
};

makeRainbowDancer.prototype = Object.create(makeDancer.prototype);

makeRainbowDancer.prototype.constructor = makeRainbowDancer;

makeRainbowDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  makeDancer.prototype.setPosition()
  this.$node.show(this);

};

makeRainbowDancer.prototype.setPosition = function(){
	makeDancer.prototype.setPosition()
}
 //butt