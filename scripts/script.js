// functie aanmaken
var navSlide = () => {
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('nav ul');

	burger.addEventListener('click',() =>{
		nav.classList.toggle('hbactive');

		 // activeer animatie hamburger menu draaien

		 burger.classList.toggle('toggle');
	});
}

navSlide();



//  BELANGRIJK

// 1. element selecteren 

// 2. luisteren naar event

// 3. Functie uitvoeren 