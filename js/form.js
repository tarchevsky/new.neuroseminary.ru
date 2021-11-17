$(document).ready(function () {
	$('#consultation-form').validate({
	  rules: {
		 // simple rule, converted to {required:true}
		 name: "required",
		 // compound rule
		 email: {
			required: true,
			email: true
		 }
	  },
     messages: {
      name: "Пожалуйста, введите своё имя",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Почта в формате mail@mail.ru(com)"
      }
    }
	});
 });