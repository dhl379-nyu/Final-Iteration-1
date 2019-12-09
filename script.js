window.addEventListener('scroll', function() {
  let current_scroll = window.pageYOffset;

  if (current_scroll <= 2600) {
    document.getElementById('text').innerHTML = "MILLIONS";
  }

  if (current_scroll > 2600) {
    document.getElementById('text').innerHTML = "DIE";
  }

  if (current_scroll > 3400) {
    document.getElementById('text').innerHTML = "ANNUALLY";
  }

  console.log(current_scroll);
});

document.addEventListener('DOMContentLoaded', function() {
  var rellax = new Rellax('.rellax');
});
