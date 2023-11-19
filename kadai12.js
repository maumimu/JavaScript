let target = document.getElementById('text01');
target.addEventListener('blur',function(){
  let span = document.getElementById('msg');
  span.innerText = target.value;
  span.classList.remove('hidden');
})