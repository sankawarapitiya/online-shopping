$(function() {

	switch (menu) {
	case 'About us':
		$('#about').addClass('active');
		break;
	case 'Contact':
		$('#contact').addClass('active');
		break;
	case 'Service':
		$('#service').addClass('active');
		break;
	default:
		$('#home').addClass('active');
		break;

	}

});