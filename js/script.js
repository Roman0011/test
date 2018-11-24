function myFirst(name,age) {

	alert("Привет меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ['STREET WORKOUT', 'HTML', 'CSS', 'WORDPRESS', 'JQuery', 'BOOTSRAP 4', 'FIGMA', 'ADOBE XD', 'PHOTOSHOP'];
		
		for (let i=0; i < skills.length; i++) {
				document.write(skills)
		}
	}

	showSkills();

	function checkAge() {
		let age = prompt("Сколько вам лет?")
		if (age > 18) {
			alert ("Добро Пожаловать!")
		}else {
			alert ("К сожелению вы не можете пройти на данный сайт")
		}
	}

	checkAge();

	function calcPow(x, n) {
		console.log(x * n);
	}

	calcPow(4, 2)
}

myFirst("Roman", 32);