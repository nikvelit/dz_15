var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");

let farmer = null;
let wolf = null;

async function addAnimal(address){
	let result = await farmer.addAnimal(address);
}

async function feedAnimal(address,food){
	let result = await farmer.feedByAddress(address, food);
	console.log("feedAnimal result",result);
}

async function callAnimal(address){
	let result = await farmer.callByAddress(address);
	console.log("callAnimal result",result);
}

module.exports = async (deployer)=>{
	
	try{

		// check if Farmer is deployed, deploy if not		
		try{
			farmer = await Farmer.deployed();
		}catch(e){
			await deployer.deploy(Farmer);
		}

		if(!farmer){
			farmer = await Farmer.deployed();
		}

		try{
			wolf = await Wolf.deployed();
		}catch(e){
			await deployer.deploy(Wolf,"Akella");
		}

		if(!wolf){
			wolf = await Wolf.deployed();
		}

		let animals = await farmer.getAnimals();
		if(animals.length === 0){
			await addAnimal(wolf.address);
		}

	}catch(e){
		console.error(e);
	}
}
