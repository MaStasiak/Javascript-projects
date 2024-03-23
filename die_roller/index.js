

function roll_dice(){
	const num_of_dice = document.getElementById("number_of_dice").value;
	const dice_result = document.getElementById("dice_result");
	const dice_images= document.getElementById("dice_images");
	const values = [];
	const images = [];

	for(let i = 0; i < num_of_dice; i++){
		const value = Math.floor(Math.random() * 6)+1;
		values.push(value);
		images.push(`<img src = "dice_images/${value}.jpg">` );
	}
	dice_result.textContent = `dice: ${values.join(', ')}`;
	dice_images.innerHTML = images.join('');
}