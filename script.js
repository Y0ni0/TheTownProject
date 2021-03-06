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

class Streets extends Town{
    constructor(name,buildYear, streetLength, size = 3){
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
    }
    totalLength(){
        return this.length 
    }
    avelength(){

    }
    catagory() {
        const streetType = new Map();
        streetType.set(1, 'Tiny');
        streetType.set(2, 'small');
        streetType.set(3, 'normal');
        streetType.set(4, 'Big'); 
        streetType.set(5, 'Huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${streetType.get(this.size)} street.`);
    }
}

const allParks = [ 
    new Parks('Green Park', 1999, 6400, 1900),
    new Parks('National Park', 1988, 760, 600), 
    new Parks('Oak Park', 1976, 400, 405)
];

const allStreets = [
    new Streets('Ocean Avenue', 1999, 450, 4), 
    new Streets('Evergreen Street', 2008, 250, 2),
    new Streets('4th Street', 2015, 350),
    new Streets('Sunset Boulevard', 1982, 540, 5)
];

function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
    
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
    const [i] = p.filter(el => el.treeNum >= 1000)
    console.log(`${i.name} has more than 1000 trees.`);

}

//street Report
function reportStreet(s) {

    console.log(`----Street Report----`);

    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.streetLength));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km with an average of ${avgLength} km.`);

    //classify sizes
    s.forEach(el => el.catagory());
}

reportParks(allParks);
reportStreet(allStreets);
