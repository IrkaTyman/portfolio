window.addEventListener('DOMContentLoaded',()=>{
	const menuItem = document.querySelectorAll('.menu-item');
	const menuText = document.querySelector('.menu-text');
	console.log(menuText,menuText)

	menuText.addEventListener('mouseover',(event)=>{
		let target = event.target;
		for(let i = 0; i < menuItem.length; i++){
			if(target == menuItem[i]){
				menuItem[i].querySelector('.coffee-logo').style.display="flex";
			} else {
				menuItem[i].querySelector('.coffee-logo').style.display="none";
			}
		}
	});

	menuText.addEventListener('mouseout',()=> {
		for(let j = 0; j < menuItem.length; j++){
			menuItem[j].querySelector('.coffee-logo').style.display="none";
		}
	});


	const arrowRightOfThreeScreen = document.querySelectorAll('.arrow3')[1];
	const arrowLeftOfThreeScreen = document.querySelectorAll('.arrow3')[0];
	const itemsChoiceThreeScreen = document.querySelectorAll('.coffee-choice');
	const itemChoiceThreeScreen = document.querySelectorAll('.coffee-choice__item')[0];
	let carusel = 0;

	arrowRightOfThreeScreen.addEventListener('click', ()=>{
		carusel = -1;
		arrowLeftOfThreeScreen.style.display='';
		itemsChoiceThreeScreen[0].classList.add('transform-left');
		itemsChoiceThreeScreen[0].style.left = `-29px`;
		itemsChoiceThreeScreen[1].style.left = `-${itemChoiceThreeScreen.clientWidth + 29}px`;	

		if(carusel == -1){
			arrowRightOfThreeScreen.style.display='none';
			arrowLeftOfThreeScreen.style.display='';
		}
	})

	arrowLeftOfThreeScreen.addEventListener('click', ()=>{
		carusel=0;
		arrowRightOfThreeScreen.style.display='';
		itemsChoiceThreeScreen[0].style.left = `0`;
		itemsChoiceThreeScreen[1].style.left = `0px`;
		itemsChoiceThreeScreen[0].classList.remove('transform-left');
		if(carusel == 0){
			arrowLeftOfThreeScreen.style.display='none';
			arrowRightOfThreeScreen.style.display='';
		}
	});


	const giftsetText = document.querySelectorAll('.giftset-text');
	const giftsetNum = document.querySelector('.giftset-num');
	const giftSetNumOne = document.querySelectorAll('.giftset-num-one');

	giftsetNum.addEventListener('click',event => {
		let target = event.target;
		for(let i = 0; i < giftSetNumOne.length; i++){
			if(target == giftSetNumOne[i]){
				for(let j = 0; j < giftSetNumOne.length; j++){
					giftsetText[j].style.display = 'none';
					giftSetNumOne[j].classList.remove('giftset-num-one_active');
				}
				giftsetText[i].style.display = 'flex';
				giftSetNumOne[i].classList.add('giftset-num-one_active');
			}
		}
	});

	const arrowRightOfFiveScreen = document.querySelectorAll('.arrow5')[1];
	const arrowLeftOfFiveScreen = document.querySelectorAll('.arrow5')[0];
	const itemsChoiceFiveScreen = document.querySelector('.coffee-choice-favorite');
	const itemChoiceFiveScreen = document.querySelectorAll('.coffee-choice-favor__item')[0];
	let caruselFive = 0;

	arrowRightOfFiveScreen.addEventListener('click', ()=>{
		caruselFive = -1;
		arrowLeftOfFiveScreen.style.display='';
		itemsChoiceFiveScreen.classList.add('transform-left-five');
		itemsChoiceFiveScreen.style.left = `-29px`;
		itemsChoiceFiveScreen.classList.remove('transform-right-five');
		if(caruselFive == -1){
			arrowRightOfFiveScreen.style.display='none';
			arrowLeftOfFiveScreen.style.display='';
		}
	})

	arrowLeftOfFiveScreen.addEventListener('click', ()=>{
		caruselFive=0;
		console.log(itemsChoiceFiveScreen.style.left)
		arrowRightOfFiveScreen.style.display='';
		itemsChoiceFiveScreen.style.left = `0px`;
		itemsChoiceFiveScreen.classList.remove('transform-left-favor');
		itemsChoiceFiveScreen.classList.add('transform-right-five');
		if(caruselFive == 0){
			arrowLeftOfFiveScreen.style.display='none';
			arrowRightOfFiveScreen.style.display='';
		}
	});
})
