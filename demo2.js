function person(name,age,weight)
{
    this.name=name;
    this.age=age;
    this.weight=weight;
}
var v=new person("vignesh",27,80);
var q=new person("virat",32,70)
//console.log(v)
person.prototype.disp=function()
{
    console.log(`My Name Is ${this.name} My age is ${this.age}`)
}

console.log(v)
console.log(q)
//  v.disp()
//  q.disp()
// console.log(v.__proto__)
// console.log(person.prototype)
//console.log()