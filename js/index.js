$('.bton').click(function () {
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});


$('.sidebar ul li a').click(function () {
  var id = $(this).attr('id');
  $('nav ul li ul.item-show-' + id).toggleClass("show");
  $('nav ul li #' + id + ' span').toggleClass("rotate");

});

$('nav ul li').click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});



// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });