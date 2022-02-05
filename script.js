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
    const divided = sum/arr.length;
    return [sum, divided];
    
}

//Park Report
function reportParks(p){

    
    console.log(`----Park Report----`);
    
    //calculating park density
    p.forEach(park => park.calcDensity());

    //calculate Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);	
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


    //Which park has more than 1000 trees
    const i = p.map(el => el.treeNum).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}
