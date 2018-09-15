var logo = $("#logo");
var wind = $(window);
var links = $(".navLi")
var hamburger = $("#hamburger");
var dropdown = $(".dropdowna")
var dropped = false
var space = $("#spacer");
var linkThing = $(".dLink");
var clickLink = $("#linkDrop")
var linkDropped = false;
var linkClicked = false;




// hamburger click listener
hamburger.on("click", function(){
	if(dropped == false){
		dropped = true
		var x = 0
			var animate = window.setInterval(function(){
				if(x < dropdown.length){
					dropdown[x].style.display = "block";
					x++	
					console.log(x)
				}else{
					clearInterval(animate);
				}
					
			
			}, 50)
			
	}else if(dropped == true){
		dropped = false
		var x = (dropdown.length -1)
			var animateBack = window.setInterval(function(){
				if(x >= 0){
					dropdown[x].style.display = "none";
					x--
					console.log(x)
				}else{
					clearInterval(animateBack);
				}
					
			
			}, 50)
			
	}
	
});




$("#linkDrop").click(function(){
	if(linkDropped){
		undropLink()
	}else{
		dropLink()
	}

	
})

$(document).click(function(){
	if(linkDropped){
		undropLink()
	}
});

$('#linkDrop').click(function(event){
    event.stopPropagation();
});


function addLinks(){
	for(var i = 0; i < links.length ; i++){
		links[i].classList.remove("hide")
	}
}

function removeLinks(){
	for(var i = 0; i < links.length; i++){
		links[i].classList.add("hide")
	}
}








function dropLink(){
	for(i = 0; i < linkThing.length; i++){
		linkThing[i].style.display = "block"

	}
	linkDropped = true
	linkClicked = true
}

function undropLink(){
	for(i = 0; i < linkThing.length; i++){
		linkThing[i].style.display = "none"
	}
	linkDropped = false
}

