
import "./scss/style.scss";
// import "./pages/count/main.js";


$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
  $(".nav").toggleClass("nav-up");
  $(".form-signup-left").toggleClass("form-signup-down");
  $(".success").toggleClass("success-left"); 
  $(".frame").toggleClass("frame-short");
	});
});

$(function() {
	$(".btn-signin").click(function() {
  $(".btn-animate").toggleClass("btn-animate-grow");
  $(".welcome").toggleClass("welcome-left");
  $(".cover-photo").toggleClass("cover-photo-down");
  $(".frame").toggleClass("frame-short");
  $(".profile-photo").toggleClass("profile-photo-down");
  $(".btn-goback").toggleClass("btn-goback-up");
  $(".forgot").toggleClass("forgot-fade");
	});
});


  $(function() {
    $(".btn-signin").click(function(event) {
      event.preventDefault(); // предотвращает стандартное поведение ссылки
      let username = $("input[name='username']").val();
      let password = $("input[name='password']").val();
      
      // Проверка логина и пароля
      if (username === 'school10' && password === '123456789') {
        // Перенаправление на страницу при успешной проверке
        window.location.href = './src/pages/count/';
      } else {
        alert('Неверный логин или пароль!'); // сообщение об ошибке
      }
    });
  });
