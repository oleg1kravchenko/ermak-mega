$(document).ready(function() {

	//qustions
	$(".item-question__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
  });

  	//input mask
	$(".input-phone").mask("+7 (999) 999-99-99");

	 // Функция обновления классов
  function updateFormState($input) {
    const $parent = $input.closest('.item-form');

    // Добавляем/удаляем класс active при фокусе
    if ($input.is(':focus')) {
      $parent.addClass('active');
    } else {
      $parent.removeClass('active');
    }

    // Добавляем/удаляем класс filled если есть значение
    if ($input.val().trim() !== '') {
      $parent.addClass('filled');
    } else {
      $parent.removeClass('filled');
    }
  }

  // Обрабатываем все input и textarea внутри item-form
  $('.item-form input, .item-form textarea').each(function () {
    updateFormState($(this)); // при загрузке страницы

    $(this)
      .on('focus blur input', function () {
        updateFormState($(this));
      });
  });


});
