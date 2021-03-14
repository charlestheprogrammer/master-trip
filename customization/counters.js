var isScrolling = false;
var srollImages = document.getElementById('scrollImages');
var srollText = document.getElementById('scrollText');
var sliderG;
var inResize = false;

function sliderMoved(slider) {
	if (!isScrolling) {
		sliderG = slider;
		isScrolling = true;
		setTimeout(() => {
			isScrolling = false;
		}, 150);
		$('#scrollImages').animate({
			scrollTop: srollImages.offsetHeight * slider.value
		}, 500);
		
		$('#scrollText').animate({
			scrollTop: srollText.offsetHeight * slider.value
		}, 520);
	}
}


window.addEventListener('resize', function() {
	if (!inResize) {
		inResize = true;
		setTimeout(() => {
			$('#scrollImages').animate({
				scrollTop: srollImages.offsetHeight * sliderG.value
			}, 500);
			
			$('#scrollText').animate({
				scrollTop: srollText.offsetHeight * sliderG.value
			}, 520);
			inResize = false
		}, 1000);
	}
})