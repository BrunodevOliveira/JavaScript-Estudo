class Mammal {
  constructor(species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge() {
    this.age++
  }
}

class Lion extends Mammal {
  //~ Quando uma classe não tem um constructor declarado, ela irá utilizar o contructor da classe que estiver herdando

  constructor(especies, name, age, manEater) {
    super(especies, name, age) // ^faz refrerência ao constructor da classe pai
    this.manEater = manEater
  }

  eatZebras(animals) {
    return animals.filter(animal => animal.species !== 'zebra')
  }
}

const zeca = new Mammal('zebra', 'Zeca', 6)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const angus = new Mammal('cavalo', 'Angus', 3)
const mufasa = new Lion('leão', 'mufasa', 7, false)

const animals = [zeca, pompeu, angus]

console.log(mufasa)
console.log(zeca)