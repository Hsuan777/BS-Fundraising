let questionItems = document.querySelectorAll('.js-questionItem');
console.log(questionItems);
questionItems.forEach(item => {
  item.addEventListener('click', Event => {
    Event.target.offsetParent.classList.toggle('custom--shaow')
    Event.target.nextElementSibling.classList.toggle('fa-angle-up')
  })
})