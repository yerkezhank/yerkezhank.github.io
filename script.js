let button = document.getElementById("submit");

button.addEventListener("click", func);

function func(){
	
	let name = document.getElementById("name").value;

	let price = parseInt(document.getElementById("bid").value);

	let love_letter = document.getElementById("loveletter").value;

	
	if(name != "" && document.getElementById("bid").value != ""){

		
		let person = {
			grooms_name: name,
			groom_price: price,
			letter_to_groom: love_letter
		};

		person.groom_price *= document.getElementById("education").value;
		person.groom_price *= document.getElementById("networth").value;
		
		if(document.getElementById("dombra").checked){
			person.groom_price += 100;
		}
		if(document.getElementById("cook").checked){
			person.groom_price += 200;
		}	
		if(document.getElementById("easy").checked){
			person.groom_price += 150;
		}
		if(document.getElementById("sing").checked){
			person.groom_price += 100;
		}
			
		if(document.getElementById("haha1").checked){
			person.groom_price *= document.getElementById("haha1").value;
		} else if(document.getElementById("haha2").checked){
			person.groom_price *= document.getElementById("haha2").value;
		} else {
			person.groom_price *= document.getElementById("haha3").value;
		}

		if(document.getElementById("parent").checked){
			person.groom_price *= 0.85;
		}
		if(document.getElementById("char").checked){
			person.groom_price *= 0.9;
		}
		if(document.getElementById("person").checked){
			person.groom_price -= 200;
		}
		
		let msg = `Your price for ${person.grooms_name} is ${person.groom_price}`;
		
		document.getElementById("cost").textContent = msg;
		document.getElementById("letter").textContent = person.letter_to_groom;
	
	

	}
	
}
