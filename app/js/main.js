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
			var input = $( e.target ),
				success = $('.success'),
			    fail = $('.fail');
			
			if(success.is(':visible')) {
				success.hide();
			}

			if( fail.is(':visible')) {
				 fail.hide();
			}

			if (input.hasClass( 'error' )) {
				input.removeClass('error');
				input.prev('.error-tooltip').hide();
			}
		}

		// Обработка сабмита формы .form-add-site
		function _checkResult(e){
			e.preventDefault();
			
			var formData = $('.form-add-data'),
			    cheker = true,
			    success = $('.success'),
			    fail = $('.fail');
			
			formData.each(function(i){
				if($( this ).val().length === 0) {
					if (!$( this ).hasClass( 'error' )) {
						$(this).addClass('error');
						$(this).prev('.error-tooltip').show();
					}
					cheker = false;
				}  
			})

			if(cheker) {
				if(success.is(':hidden')) {
				success.show();
				formData.each(function(){
					$( this ).val('');
				})

				} 
			}
		}
		
		function _infoExit(e) {
			e.preventDefault();

			var exitSign = $( e.target ),
			    formInfoSuccess = $('.form-info.success'),
			    formInfoFail = $('.form-info.fail');

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
				if($( this ).val().length === 0) {
					if (!$( this ).hasClass( 'error' )) {
						$(this).addClass('error');
						$(this).prev('.error-tooltip').show();
					}
					cheker = false;
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
			var input = $( e.target ),
				success = $('.success'),
			    fail = $('.fail');
			
			if(success.is(':visible')) {
				success.hide();
			}

			if( fail.is(':visible')) {
				 fail.hide();
			}

			if (input.hasClass( 'error' )) {
				input.removeClass('error');
				input.prev('.error-tooltip').hide();
			}
		}

		// Обработка сабмита формы .b-contact-form
		function _checkResult(e){
			e.preventDefault();
			
			var checkCapcha = $('.capcha-enter');
			console.log(checkCapcha.val());


			var formData = $('.b-contact-form__group-data'),
				form = $('#contact-form'),
			    success = $('.success'),
			    fail = $('.fail'),
			    cheker = true,
			    url = 'php/action-contact.php';
			   
			
			formData.each(function(i){
				if($( this ).val().length === 0) {
					if (!$( this ).hasClass( 'error' )) {
						$(this).addClass('error');
						$(this).prev('.error-tooltip').show();
					}
					cheker = false;
				}  
			})
			
			if(cheker) {
				var  defObject = _ajaxForm(form, url);
				defObject.done(function(ans){
					if(success.is(':hidden')) {
						success.show();
					}
					formData.each(function(){
					$( this ).val('');
					})
					console.log(ans);
					
				})
			}
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

	
	// Универсальная функция ajax
	function _ajaxForm(form, url){

		var data = form.serialize(),

			defObj = $.ajax({
				type : "POST",
				url : url,
				dataType : "JSON",
				data: data
			}).fail(function(){
				console.log('Проблемы на стороне сервера');
			})

		return defObj;
	}
	
	// Возвращаем в глобальную область видимости
		return {
			init: function () {
				_setUpListners();
			}
		}

	}());

	var FileInput = (function(){

		// Подключаем прослушку событий
		function _setUpListners(){
			$('#projectimg').on('change', _addImage)
			
		}

		// Обработка нового ввода в input uploadfile формы .form-add-site
		function _addImage (e) {
			var fileInput = $(this).val().split('\\').pop(),
			    textBox = $('#text-file-box'); 

			textBox.val(fileInput);
			if(textBox.hasClass( 'error' )) {
				textBox.removeClass('error');
				textBox.prev('.error-tooltip').hide();
			}

			
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
FileInput.init();








})(jQuery);