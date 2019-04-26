(function ($) {

	var length = $('#cubeTransition>div').length,
		current = 1,
		next = 1,
		outClass, inClass, onGoing = false;
	$('#cubeTransition>div:eq(0)').addClass('visible');

	for (i = 0; i < length; i++) {
		var bullet = $("<li></li>");
		if (i == 0) bullet.addClass('active');
		$("#bullets").append(bullet);
	}

	function openIndex(i) {
		if (!onGoing && next != i) {
			onGoing = true;
			next = i
			outClass = current > i ? 'rotateCubeBottomOut' : 'rotateCubeTopOut'
			inClass = current > i ? 'rotateCubeBottomIn' : 'rotateCubeTopIn';
			show()
		}
	}

	function trans(direction) {
		if (!onGoing) {
			onGoing = true;
			if (direction == 'up') {
				next = current > 1 ? current - 1 : length;
				outClass = 'rotateCubeBottomOut';
				inClass = 'rotateCubeBottomIn';
			} else {
				next = current < length ? current + 1 : 1;
				outClass = 'rotateCubeTopOut';
				inClass = 'rotateCubeTopIn';
			}
			show();
		}
	}

	function show() {
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass('visible');
		$('#cubeTransition>div:eq(' + (current - 1) + ')').addClass(outClass);
		$('#cubeTransition>div:eq(' + (next - 1) + ')').addClass(inClass);
		$('#bullets>li:eq(' + (current - 1) + ')').removeClass('active');
		$('#bullets>li:eq(' + (next - 1) + ')').addClass('active');

		animationOut(current - 1)
		setTimeout(function () {
			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass('visible');
		}, 500)
		setTimeout(function () {

			$('#cubeTransition>div:eq(' + (current - 1) + ')').removeClass(outClass);
			$('#cubeTransition>div:eq(' + (next - 1) + ')').removeClass(inClass);
			animationIn(next - 1)
			current = next;
			onGoing = false;
		}, 600)
	}

	$(document).ready(

		function () {

			//for scroll by mouse or MAC track pad
			var indicator = new WheelIndicator({
				callback: function (e) {
					if (e.target.id != "ovse" && e.target.id != "hh1" && e.target.id != "hh2" && e.target.id != "hh3" && e.target.id != "hh4" && e.target.id != "hh5" && e.target.id != "hh6" && e.target.id != "hh7" && e.target.id != "hh7") {
						if (e.direction == 'down') {
							trans('down')

						} else {
							trans('up')

						}
					}


				}
			});
			$(document).keydown(function (e) {

				if (e.keyCode == 38 || e && e.keyCode == 37) {
					trans('up')
				}
				if (e.keyCode == 39 || e && e.keyCode == 40) {
					trans('down')
				}

			});

			$('#big').click(function (e) {
				trans('down')
			});
			$("#down").click(function (e) {
				trans('down')

			});
			$("#hed").click(function (e) {
				trans('up')
			});

			setInterval(function () {
				if ($('#header1').hasClass('visible')) {
					$('nav').css('display', 'none')
					$('#hed').css('display', 'none');
					$('#down').css('display', 'none')
				}
				if ($('#section1').hasClass('visible')) {
					$('nav').css('display', 'block')
					$('#hed').css('display', 'block');
					$('#down').css('display', 'block');
					
				}
				if ($('#section2').hasClass('visible')) {
					$('nav').css('display', 'block')
					$('#hed').css('display', 'block');
					$('#down').css('display', 'none')
					
				}
			}, 1);

			

		});
})(jQuery);