class Town{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Town{
   constructor(name, buildYear, treeNum, parkArea){
       super(name, buildYear);
       this.treeNum = treeNum;
       this.parkArea = parkArea; //Km2
   }
   calcDensity(){
       const density = this.treeNum / this.parkArea;
       console.log(`${this.name} has a tree density of ${density} trees per square km`);
   }
   parkAge(){
       let parkage = new Date().getFullYear() - this.buildYear;
       return parkage;
   } 
}

function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
    
}
