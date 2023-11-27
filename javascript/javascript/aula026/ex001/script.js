const box = document.querySelector("#obj")

const compt = {
    cpu: 'i9',
    ram: '64gb',
    sdd: '2tb',
    info: function () {
        console.log(`Cpu: ${this.cpu}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`Hd: ${this.sdd}`);
    }

}

compt["monitor"] = "22 pol"
compt.placaVideo = "rtx"

delete(compt.monitor)

console.log(compt);
console.log(compt["placaVideo"]);

const c1 = Object.assign({},compt)
c1.info()

const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}

const o4 = Object.assign(o1,o2,o3)
console.log(o4);

const compt2 = Object.create(compt)
compt2.sdd = "2tb"
console.log("----");
console.log(compt2);
console.log("----");

const compts = [
    {
        cpu: 'i3',
        ram: '32gb',
        sdd: '2tb'
    },
    {
        cpu: 'i5',
        ram: '64gb',
        sdd: '2tb'
    },
    {
        cpu: 'i7',
        ram: '128gb',
        sdd: '2tb'
    }
]

compts.forEach((c)=>{
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.sdd
    box.appendChild(div)
})

// compt.info()

// box.innerHTML = JSON.stringify(compt)