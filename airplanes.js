
// var p1Images = $(".p1Images");
// var p2Images = $(".p2Images");
// var count = 0
// var clicked = false;
// var showing = false;

// // FOR SLIDESHOW

// function changeForeward(group){
// 	group[count].style.display = "none"

// 	if(count >= group.length -1){
// 		count = 0;
// 	}else{
// 		count++
// 	}
// 	group[count].style.display = "block"
// 	console.log(count)
// }

// function changeBackward(group){
// 	group[count].style.display = "none"

// 	if(count <= 0){
// 		count =  group.length -1;
// 	}else{
// 		count--
// 	}
// 	group[count].style.display = "block"
// 	console.log(count)
// }

// // WHEN YOU CLICK THE RIGHT ARROW, OR THE IMAGE
// $(".oneRight").click(function(){
// 	changeForeward(p1Images)
// })

// $(".twoRight").click(function(){
// 	changeForeward(p2Images)
// })

// // WHEN YOU CLICK THE LEFT ARROW
// $(".oneLeft").click(function(){
// 	changeBackward(p1Images)
// })

// $(".twoLeft").click(function(){
// 	changeBackward(p2Images)
// })

// // $(".slide2").click(function(){
// // 	changeForeward(p2Images)
// // })

// // $(".slide1").click(function(){
// // 	changeForeward(p1Images)
// // })

var slides = {}
var exists = true;
var maxSlides = 20;

var planes = $('.plane');

function initSlides(){
	fillDict()
	fillImages()
	addRightClicks()
	addLeftClicks()
}

// put original images in frames
function fillImages(){
	for (var i = 0; i < planes.length; i++) {
		var id = planes[i].id
		var search = "#" + id + " .slide-container"
		$(search).css("background-image", "url('" + buildUrl(id) + "')")
		console.log(buildUrl(id, slides[id]))
		
	}
}

function addRightClicks(){
	for (var i = 0; i < planes.length; i++) {
		var id = planes[i].id
		var search = "#" + id + " .fa-chevron-right"
		$(search).click(function(){
			// id is the id of plane
			var id = $(this).closest(".plane").attr("id")
			console.log(id)
			slides[id] += 1
			var url = buildUrl(id)
			var slideContainer = this.closest(".slide-container")
			$.get(url)
			    .done(function() { 
			       slideContainer.style.background = "url('" + buildUrl(id) + "')"
			    }).fail(function() { 
			        slides[id] = 1
				slideContainer.style.background = "url('" + buildUrl(id) + "')"
			    })

		})
	}
}

// These two could be made into one function, but I didn't feel like doing it.
function addLeftClicks(){
	for (var i = 0; i < planes.length; i++) {
		var id = planes[i].id
		var search = "#" + id + " .fa-chevron-left"
		$(search).click(function(){
			// id is the id of plane
			var id = $(this).closest(".plane").attr("id")
			console.log(id)
			slides[id] -= 1
			var url = buildUrl(id)
			var slideContainer = this.closest(".slide-container")
			$.get(url)
			    .done(function() { 
			       slideContainer.style.background = "url('" + buildUrl(id) + "')"
			    }).fail(function() { 
			        slides[id] = 1
				slideContainer.style.background = "url('" + buildUrl(id) + "')"
			    })

		})
	}
}

function buildUrl(id){
	var pos = slides[id]
	return "/airplanes/images/" + id + "/image" + pos + ".jpg"
}


// create object with keys of ids and values of 1
function fillDict(){
	for (var i = 0; i < planes.length; i++) {
		var id = planes[i].id
		slides[id] = 1
		
	}
}
initSlides()
console.log(slides)

