class Shape{
    constructor(name,sides,sidelength)
    {
        this.name=name;
        this.sides=sides;
        this.sidelength=sidelength;
    }
    calperi()
    {
        
        
            return `perimeter of ${this.name} ${this.sides*this.sidelength}`
        
        
        
        
        
    
}
}
var square=new Shape("square",4,10);
var triangle=new Shape("triangle",3,8);
console.log(square.calperi());
console.log(triangle.calperi());
//console.log(square)