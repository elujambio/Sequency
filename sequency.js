
function SequencyLoad(Images, ImageSources, ImageElements, Counter){
	if (Counter < ImageElements.length) {
		ImageSources[Counter] = ImageElements[Counter].getAttribute("data-src");
		Images[Counter] = new Image();  

		Images[Counter].addEventListener("load", function callNext() {
			if (ImageElements[Counter].tagName === "IMG") {
				ImageElements[Counter].src = Images[Counter].src;
				console.log(" is image ");
			} else {
				ImageElements[Counter].style.background = "url('" + Images[Counter].src + "')";
				ImageElements[Counter].style.backgroundColor = "red";
				console.log("Background Image: " + ImageElements[Counter].style.backgroundImage);
				console.log(" is not img ");
			}
			console.log("Image " + Counter + " loaded");
			Counter++;
			SequencyLoad(Images, ImageSources, ImageElements, Counter);
			Images[Counter].removeEventListener("load", callNext);
			console.log("Removed event listener");
		});

		// console.log(Images[Counter]);
		// console.log(ImageSources[Counter]);
		// console.log(ImageElements[Counter]);

		Images[Counter].src = ImageSources[Counter];
		console.log("ImageSource:" + Images[Counter].src);

	}
}
function Sequency(){
	var Counter = 0;
	var Images = []; 
	var ImageSources = [];
	var ImageElements = document.querySelectorAll('[data-src]');
	SequencyLoad(Images, ImageSources, ImageElements, Counter);
}


