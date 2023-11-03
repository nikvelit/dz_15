var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");

let farmer = null;
let wolf = null;

const WOLF_NAME = "Akella";
const WOLF_SPEAK = "Awoo";
const ANIMAL_SLEEP = "Z-z-z...";
const ANIMAL_EATS_MEAT = "Animal eats meat";
const ANIMAL_EATS_PLANT = "Animal eats plant";
const ANIMAL_EATS_CHOCOLATE = "Animal eats chocolate"
;
const PLANT = "plant";
const MEAT = "meat";
const CHOCOLATE = "chocolate";

// 
/*
1. Завантажити Farmer
 + чи задеплоївся фермер?
 + чи у фермера масив Animals містить 1 елемент?

2. Завантажуємо Вовка 
+ чи задеплоївся вовк?
+ чи є у вовка ім'я? чи ім'я у нього таке як ми очікуємо?
- чи ми можемо викликати метод Sleep? Чи виводить він коректний output?
- чи ми можемо викликати метод Speak? Чи виводить він коректний output?
- чи можемо ми вовка покормити plant? чи можемо meat? чи можемо chocolate?

3. addAnimal
- чи додалась тварина?
- чи можна в параметр addAnimal додати не адресу тварини, а число/або бул/

4. feedAnimal
5. callAnimal
- 

*/


contract("Farmer", async(accounts)=>{
	let farmer=false;;
	it("Farmer is deployed to blockchain",async()=>{
		let farmerIsDeployed = false;
		try{
			farmer = await Farmer.deployed();
			if(farmer.address){
				farmerIsDeployed=true
			}
		}catch(e){
			
		}
		assert.equal(farmerIsDeployed,true,"Farmer is not deployed");
	});

 	it("Farmer has 1 animal added",async()=>{
 		let animals = await farmer.getAnimals();
		assert.equal(animals.length,1,"Farmer has more or less than 1 animal");
 	});
 });

contract("Wolf", async(accounts)=>{
	let wolf=false;
	it("Wolf is deployed to blockchain",async()=>{
		let wolfIsDeployed = false;

		try{
			wolf = await Wolf.deployed();
			if(wolf.address){
				wolfIsDeployed=true
			}
		}catch(e){
			
		}
		assert.equal(wolfIsDeployed,true,"Wolf is not deployed");
	});

 	it(`Wolf is named ${WOLF_NAME}`,async()=>{
 		let name = await wolf.getName();
		assert.equal(name, WOLF_NAME,`Wolf is not named ${WOLF_NAME}`);
 	});

 	it("Wolf can sleep",async()=>{
 		let result = await wolf.sleep();
		assert.equal(result, ANIMAL_SLEEP,"Wolf does not sleep as expected");
 	});

 	it("Wolf can speak",async()=>{
 		let result = await wolf.speak();
		assert.equal(result, WOLF_SPEAK,"Wolf does not speak as expected");
 	});

 	it("Wolf can eat only meat",async()=>{

 		let canEatPlant = false;
 		let canEatMeat = false;
 		let canEatChocolate = false;

 		try{
 			canEatPlant = await wolf.eat(PLANT);
 		}catch(e){

 		}

		assert.notEqual(canEatPlant, ANIMAL_EATS_PLANT,"Wolf can eat plant");

		try{
 			canEatMeat = await wolf.eat(MEAT);
 		}catch(e){

 		}
		assert.equal(canEatMeat, ANIMAL_EATS_MEAT,"Wolf cannot eat meat");

		try{
 			canEatChocolate = await wolf.eat(CHOCOLATE);
 		}catch(e){

 		}
		assert.notEqual(canEatChocolate, ANIMAL_EATS_CHOCOLATE,"Wolf can eat chocolate");

 	});
 });

// contract("Testing Wolf",async(account)=>{

// 	it("")
// })
