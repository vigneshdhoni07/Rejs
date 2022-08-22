class Square{
    constructor(name,sides,length)
    {
        this.name=name;
        this.sides=sides;
        this.length=length;
    }
    calperi()
    {
        console.log(`${ this.sides*this.length}`);

    }
}
class Squ extends Square{
    constructor(n,s,q)
    {   super(n,s,q)
        
    }
    calcirc()
    {
        console.log(this.length*this.length);

    }
}
var s=new Squ("square",4,5)
s.calcirc()
s.calperi()