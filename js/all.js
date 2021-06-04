const questionItems = document.querySelectorAll('.js-questionItem');
const tabContentItems = document.querySelectorAll('.tab-content');
const bottomBtn = document.querySelector('.js-bottomBtn');
const productTab = document.querySelector('#productTab');
const pageFooter = document.querySelector('#pageFooter');

let productTabHeight = productTab.offsetTop + productTab.offsetHeight;
// mobile 置底按鈕出現時機
const bottomBtnScroll = () => {
  // 不同裝置取得方式
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop < productTabHeight || scrollTop > pageFooter.offsetTop - window.screen.height) {
    bottomBtn.classList.add('d-none');
  } else {
    bottomBtn.classList.remove('d-none');
  }
}

const goToScroll = scrollNumber => {
  window.scrollTo({
    top: scrollNumber,
    behavior: 'smooth'
  })
}

// 常見問答開關效果
questionItems.forEach(item => {
  item.addEventListener('click', Event => {
    Event.target.offsetParent.classList.toggle('custom--shaow')
    Event.target.nextElementSibling.classList.toggle('fa-angle-up')
  })
})
// 回滾到頁籤內容頂部
productTab.addEventListener('click', () => {
  // 頁籤內容當前高度 - 頁籤標題高度 - 推移高度
  goToScroll(tabContentItems[0].offsetTop - productTab.offsetHeight - 48);
})
// 監聽目前捲軸高度
window.addEventListener('scroll', bottomBtnScroll)
