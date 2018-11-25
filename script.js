function submitAction(form){
	var name = document.getElementById("name");
	name.innerHTML = form.Name.value;
	var food = document.getElementById("radioFood");
	food.innerHTML = form.food.value;
	var number = document.getElementById("number");
	number.innerHTML = form.Number.value;
	var word = document.getElementById("gg");
	gg.innerHTML = form.gg.value;
}