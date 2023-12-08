
$(document).ready(function(){
  $("#footer").load("footer.html"); 
  // Nav
  $("#nav").load("/nav/nav_bar.html");
  // Pages
  $("#intro").load("/pages/intro.html");
  $("#hobbies").load("/pages/hobbies.html");
  $("#skills").load("/pages/skills.html");
  $("#furrybabies").load("/pages/furry_babies.html");

});

function loadContent(param_div_id){
  document.getElementById('main').innerHTML = document.getElementById(param_div_id).innerHTML;
};