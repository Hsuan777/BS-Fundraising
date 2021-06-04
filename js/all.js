let questionItems = document.querySelectorAll('.js-questionItem');
let bottomBtn = document.querySelector('.js-bottomBtn');
let productTab = document.querySelector('#productTab');

let productTabHeight = productTab.offsetTop + productTab.offsetHeight;

// 常見問答開關效果
questionItems.forEach(item => {
  item.addEventListener('click', Event => {
    Event.target.offsetParent.classList.toggle('custom--shaow')
    Event.target.nextElementSibling.classList.toggle('fa-angle-up')
  })
})
// mobile 置底按鈕出現時機
const bottomBtnScroll = () => {
  // 不同裝置取得方式
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop < productTabHeight) {
    bottomBtn.classList.add('d-none')
  } else {
    bottomBtn.classList.remove('d-none')
  }
}
window.addEventListener('scroll', bottomBtnScroll)
