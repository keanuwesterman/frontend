let menu = document.querySelector('.menu')
  menu.addEventListener('click', (e) => {
    document.querySelector('ul').classList.toggle('active');
  })

var hoofdtitel = document.querySelector("section:nth-of-type(2) button");
hoofdtitel.addEventListener("click", veranderhoofdtitel);
function veranderhoofdtitel() {
	let hoofdtitel = document.querySelector("section:nth-of-type(2)");
	hoofdtitel.classList.toggle("anders")
}

/* voorbeeld Danny

1. element selecteren 

2. luisteren naar event

3. Functie uitvoeren 