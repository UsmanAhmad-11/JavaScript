function multiplyBy5(num){
    this.num = num;
    return num*5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printME = function(){
    console.log(`price is ${this.score}`);
}

const cofee = new createUser("cofee", 25)
const balckCoffe =  new createUser("blackCoffe", 250)

cofee.printME()