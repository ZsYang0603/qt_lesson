//咖啡机
//oo 面向对象 属性和方法
var Coffee=function(){

}
Coffee.prototype.boilWater = function(){
    console.log('把水烧开');
}
Coffee.prototype.brewCoffeeGrieds = function(){
    console.log('用水泡咖啡')
}
Coffee.prototype.pourInCup = function(){
    console.log('把咖啡倒进杯子')
}
Coffee.prototype.addSugarAndMik = function(){
    console.log('加糖和牛奶')
}
Coffee.prototype.cook=function(){
    this.boilWater();
    this.brewCoffeeGrieds();
    this.pourInCup();
    this.addSugarAndMik();
    this.cook();
}
var Coffee=new Coffee();
  Coffee.cook();