$(document).ready(function() {
	console.log("Document ready!");
	let ch = new Chance();

	// *****START***** ONE LOW, ONE UPPER, ONE NUMBER, ONE SPECIAL, MINIMUM EIGHT 
	genPass = function () {
		const POOL = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^*()[]!";
		let strPass = ch.string({length: 12, pool: POOL});
		let subPool = [
			'abcdefghijklmnopqrstuvwxyz',
			'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			'01234567890123456789012345',
			'!@#$%^*()[]!@#$%^*()[]!@#$'
		];
		var validPass = subPool.reduce(function(sum, current) {
			let hhh = current.charAt(Math.floor( Math.random() * 26))
			return sum + hhh;
		}, 0);
		let result = strPass + validPass;
		$('#u_pass').val(result);
	};

	genLastName = function () {
		let userFirstName = ch.first({gender: 'male', nationality: 'en'});
		let userLastName = ch.last({gender: 'male', nationality: 'en'});
		let user = userFirstName + ' ' + userLastName;
		$('#u_name').val(user);
	};

	$('#u_name, #u_pass').on('click', function() {
		$(this).select();
		let copied = $(this).parent('.item_wrap').children('.copied');
		copied.css('display', 'block');
		console.log(document.execCommand("copy"));
		setTimeout(function() { 
			copied.fadeOut(500);
		}, 0);

	});

	genPass();
	genLastName();
	// *****END***** ONE LOW, ONE UPPER, ONE NUMBER, ONE SPECIAL, MINIMUM EIGHT 

	


	// *****START***** JS TIMER - FUCNS FOR STOP/START DOWNCOUNT TIMER WHEN YOU DEACTIVATE TAB IN BROWSER  
	var timer = null; 
	var interval = 500;
	var value = 501;

	function start(){
		if (timer !== null) return;
			timer = setInterval(function () {
		  	value = value-1;
		  	$("#time").html(value);
		}, interval);	
	};
	function stop(){
		clearInterval(timer);
		timer = null
	};
	function reset (){
		return value = 501;
	};

	$("#start").click(function() {
		start();
	});
	$("#stop").click(function() {
		stop();
	});
	$("#reset").click(function() {
		start();
		reset();
	});

	start();

	//start or stop when tab in browser is not active
	document.addEventListener("visibilitychange", toggleTimer);
	function toggleTimer(){
		if(document.visibilityState === "hidden"){
			stop();
		}
		if(document.visibilityState === "visible"){
			start();
		}
	};
	// *****END***** JS TIMER - FUCNS FOR STOP/START DOWNCOUNT TIMER WHEN YOU DEACTIVATE TAB IN BROWSER






});