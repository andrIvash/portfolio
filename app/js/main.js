(function($, undefined){

	var AddSite = (function(){

		// Подключаем прослушку событий
		function _setUpListners(){
			$('#add-site').on('click', _showPopUp);
			$('#add-site-exit').on('click', _closePopUp)
			$('.form-add-data').on('click', _newEnter)
			$('.form-add-site').on('submit', _checkResult);
			$('.info-exit').on('click', _infoExit);
		}

		// Обработка кнопки  #add-site  открытие формы
		function _showPopUp(e) {
			e.preventDefault();

			var form = $('.popup__overlay');
			
			if(form.is(':hidden')) {
				form.show();
			} 
		}

		// Обработка кнопки  #add-site-exit  закрытие формы
		function _closePopUp(e) {
			e.preventDefault();

			var form = $('.popup__overlay');
			
			if(form.is(':visible')) {
				form.hide();
			}
		}

		// Обработка нового ввода в input формы .form-add-data
		function _newEnter (e) {
			e.preventDefault();
			var input = $( e.target );
			if (input.hasClass( 'error' )) {
				input.removeClass('error');
				input.prev('.error-tooltip').hide();
			}
		}

		// Обработка сабмита формы .form-add-site
		function _checkResult(e){
			e.preventDefault();
			
			var formData = $('.form-add-data');
			var cheker = false;
			
			formData.each(function(i){
				if($( this ).val().length === 0 && !$( this ).hasClass( 'error' )) {
					$(this).addClass('error');
					$(this).prev('.error-tooltip').show();
					
				} 
			})
			
		}
		
		function _infoExit(e) {
			e.preventDefault();

			var exitSign = $( e.target );
			var formInfoSuccess = $('.form-info.success');
			var formInfoFail = $('.form-info.fail');

			if(exitSign.hasClass('succ') && formInfoSuccess.is(':visible')) {
				formInfoSuccess.hide();
			}

			if(exitSign.hasClass('err') && formInfoFail.is(':visible')) {
				formInfoFail.hide();
			}
		}

	// Возвращаем в глобальную область видимости
		return {
			init: function () {
				_setUpListners();
			}
		}

	}());
	
	var Login = (function(){

		// Подключаем прослушку событий
		function _setUpListners(){
			$('.form-login-data').on('click', _newEnter)
			$('.form-login').on('submit', _checkResult);
			
		}

		// Обработка нового ввода в input формы .form-login-data
		function _newEnter (e) {
			e.preventDefault();
			var input = $( e.target );
			if (input.hasClass( 'error' )) {
				input.removeClass('error');
				input.prev('.error-tooltip').hide();
			}
		}

		// Обработка сабмита формы .form-login
		function _checkResult(e) {
			e.preventDefault();
			
			var formData = $('.form-login-data');
			
			formData.each(function(i){
				if($( this ).val().length === 0 && !$( this ).hasClass( 'error' )) {
				$(this).addClass('error');
				$(this).prev('.error-tooltip').show();
				}
			})
			
		}

	// Возвращаем в глобальную область видимости
		return {
			init: function () {
				_setUpListners();
			}
		}

	}());


	var Contact = (function(){

		// Подключаем прослушку событий
		function _setUpListners(){
			$('.b-contact-form__group-data').on('click', _newEnter)
			$('.b-contact-form').on('submit', _checkResult);
			$('.b-contact-form').on('reset', _resetInput);
		}

		// Обработка нового ввода в input формы .b-contact-form__group-data
		function _newEnter (e) {
			e.preventDefault();
			var input = $( e.target );
			if (input.hasClass( 'error' )) {
				input.removeClass('error');
				input.prev('.error-tooltip').hide();
			}
		}

		// Обработка сабмита формы .b-contact-form
		function _checkResult(e){
			e.preventDefault();
			
			var formData = $('.b-contact-form__group-data');
			
			formData.each(function(i){
				if($( this ).val().length === 0 && !$( this ).hasClass( 'error' )) {
				$(this).addClass('error');
				$(this).prev('.error-tooltip').show();
				}
			})
			
		}

		// Обработка ресета формы .b-contact-form
		function _resetInput(e) {
			// e.preventDefault();

			var formData = $('.b-contact-form__group-data');
			
			formData.each(function(i){
				if($( this ).hasClass( 'error' )) {
				$(this).removeClass('error');
				$(this).prev('.error-tooltip').hide();
				}
			})

		}


	// Возвращаем в глобальную область видимости
		return {
			init: function () {
				_setUpListners();
			}
		}

	}());

AddSite.init();
Login.init();
Contact.init();








})(jQuery);