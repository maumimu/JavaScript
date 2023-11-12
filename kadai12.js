let target = document.getElementById('p1');
target.addEventListener('blur', function() {
    let span = document.getElementById('msg');
    span.classList.remove('hidden');
});