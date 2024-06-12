document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 2000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseleave Event
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseclick Event
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //------ Gesture Tap Event
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  //---- Slider End
  
});
var data=[
	{
		Name:"New Zealand",
		image:"img/img-1.jpg",
	},
	{
		Name:"Switzerland",
		image:"img/img-2.jpg",
	},
	{
		Name:"Australia",
		image:"img/img-3.jpg",
	},
	{
		Name:"Norway",
		image:"img/img-4.jpg",
	},
	{
		Name:"Spain",
		image:"img/img-5.jpg",
	},
	{
		Name:"Dubai",
		image:"img/img-6.jpg",
	},
	{
		Name:"Canada",
		image:"img/img-7.jpg",
	},
	{
		Name:"New York",
		image:"img/img-8.jpg",
	}
]
if (document.querySelector(".product")) {
    for (var i = 0; i < data.length; i++) {
      document.querySelector(".product .row").innerHTML += `
	  <div class="col">
	  <div class="card" style="width: 18rem;">
		  <img src="${data[i].image}" class="card-img-top" alt="..."height="200px">
		  <div class="card-body">
			  <p class="card-text">${data[i].Name}</p>
			<a href="#" class="btn btn-light">Learn More &#10137;</a>
		  </div>
	  </div>
      </div>`
    }
  }