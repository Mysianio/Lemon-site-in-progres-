let navInput = document.querySelector('#navInput');
let carouselItem = document.querySelectorAll('.carouselItem');
let recipeButtons = document.querySelectorAll('.recipeButtons span');

navInput.onfocus = () =>{
  navInput.style.width = '220px';
  navInput.placeholder = '';
}
navInput.onblur = () =>{
  navInput.style.width = '110px';
  navInput.placeholder = 'Find recipe';
}
let carouselTimeout;
for (let i = 0; i < recipeButtons.length; i++) {
  recipeButtons[i].addEventListener('click', ()=>{
    currentId = i;
    carousel();
    clearInterval(carouselInterval)
    clearTimeout(carouselTimeout)
    carouselTimeout = setTimeout(()=>{
      carouselTimer();
      console.log('TimerON');
    },5000)
  })
}
let carousel = () =>{
  switch (currentId) {
    case 0:
      carouselItem[currentId].style.left = '0';
      recipeButtons[currentId].style.color = '#000';
      carouselItem[currentId+1].style.left='160%';
      recipeButtons[currentId+1].style.color= '#ccc';
      carouselItem[currentId+2].style.left='260%';
      recipeButtons[currentId+2].style.color='#ccc';
      break;
    case 1:
      carouselItem[currentId-1].style.left='-100%';
      carouselItem[currentId].style.left = '0';
      recipeButtons[currentId-1].style.color= '#ccc';
      recipeButtons[currentId].style.color = '#000';
      carouselItem[currentId+1].style.left='160%';
      recipeButtons[currentId+1].style.color= '#ccc';
      break;
    default:
      carouselItem[currentId-2].style.left='-260%';
      recipeButtons[currentId-2].style.color='#ccc';
      carouselItem[currentId-1].style.left = '-160%';
      recipeButtons[currentId-1].style.color= '#ccc';
      carouselItem[currentId].style.left='0';
      recipeButtons[currentId].style.color= '#000';
  }
}
let currentId = 0;
let carouselTimer = () =>{
   carouselInterval = setInterval(() =>{
    if (currentId < 2){
      currentId++;
    }else{
      currentId = 0;
    }
    carousel();
  }, 3000)
}
carouselTimer();
