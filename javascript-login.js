const body = document.body;
const nav = document.querySelector('header');
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lasrScroll = 0;
window.addEventListener('scroll',()=>{
  const currentScroll = window.pageYOffset;
  if(currentScroll<= 0){
    body.classList.remove('scrollUp');
    body.classList.remove('header-fixed');
    body.classList.remove('header-show');
    return;
  }
  if(currentScroll > lasrScroll && !body.classList.contains('scrollDown')){
    body.classList.remove('scrollUp');
    body.classList.add('scrollDown');
    body.classList.add('header-fixed');
    if(body.classList.contains('header-show'))
    body.classList.remove('header-show');
  }else if(currentScroll < lasrScroll && body.classList.contains('scrollDown')){
    body.classList.remove('scrollDown');
    body.classList.add('scrollUp');
    body.classList.add('header-show');
  }
  lasrScroll = currentScroll;

})

const getElement = (id) => {
  const elem = document.getElementById(id);
  if (elem) return elem;
  return undefined;
}
searchElm = document.getElementById('search-input').addEventListener('focus', (e) => {

  const darkElm = getElement('header-search-darkness')
  darkElm.classList.add('header-search-dark');
  var openElm = document.getElementById('header-search');
  openElm.classList.add('header-search--open');
  var searchSugg = document.getElementById('search-suggestion');
  searchSugg.style.display = 'block';
})

function removeDark() {
  var darkElm = getElement('header-search-darkness');
  darkElm.classList.remove('header-search-dark');
  var closeElm = getElement('header-search');
  closeElm.classList.remove('header-search--open');
  var searchSugg = getElement('search-suggestion').style.display = 'none';
}
document.addEventListener('click', () => {
  var divInput = getElement('div-input');
  var emlElm = getElement('input-email')
  if (emlElm === document.activeElement) {
    divInput.classList.add('bs-focused-input');

  } else {
    divInput.classList.remove('bs-focused-input')
  }
})
var spanElm = document.getElementById('change');
spanElm.addEventListener('click', function (event) {
  console.log('test');
  changeTitle('change');
})

function changeTitle(id) {
  var element = document.getElementById(id)
  if (element.classList.contains('more')) {
    var el1;
    el1 = document.getElementById('change');
    el1.innerHTML = 'نمایش کمتر'
    el1.classList.remove('more');
    el1.classList.add('less');
    el3 = document.getElementById('box-more-text');
    el3.classList.remove('d-none');
    el3.classList.add('d-block');
  } else {
    var el2;
    el2 = document.getElementById('change');
    el2.innerHTML = 'نمایش بیشتر'
    el2.classList.remove('less');
    el2.classList.add('more');
    el4 = document.getElementById('box-more-text');
    el4.classList.remove('d-block');
    el4.classList.add('d-none');
  }
}
function collapse(id) {
  var collapseElm = document.getElementById(id);
  if (collapseElm.classList.contains('bs-collapse--closed')) {
    collapseElm.classList.remove('bs-collapse--closed');
    collapseElm.classList.add('bs-collapse--open');
  } else if (collapseElm.classList.contains('bs-collapse--open')) {
    collapseElm.classList.remove('bs-collapse--open');
    collapseElm.classList.add('bs-collapse--closed');
  }
}
function validateEmail(email){
  var regxp = /\S+@\S+\.\S+/;
  return regxp.test(email);
}
function repeating(String,char){
  var arrayStr = String.split('');
  var count=0;
  for(var i = 0 ; i<arrayStr.length;i++){
    if(arrayStr[i]==char){
      count++
    }
  }
  if(count==1){
    return true;
  }else{
    return false
  }
}
function afterDot(emailString){
  var parts = emailString.split('.');
  for(var i =0 ; i<parts.length ; i++){
    console.log(parts[i]);
    if(parts[i].length<2) return false;
  }
  return true;
  
}

var bgsuccess = 'rgb(51, 114, 17)';
  var bgError = 'rgb(163,46,62)';

  var emailBtn = document.getElementById('email-button');
  emailBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var emailElm = document.getElementById('input-email');
    var emailVal = emailElm.value;
    emailVal.trim();

    if (emailVal.charAt(0) != '@' && emailVal.charAt(0) != '.' && emailVal.charAt((emailVal.length) - 1) != '@' &&
      emailVal.charAt((emailVal.length) - 1) != '.' && repeating(emailVal, '@') == true && emailVal.includes('.',
        1) == true && afterDot(emailVal) == true) {
      Error('ایمیل شما با موفقیت ثبت شد.',bgsuccess)
    } else {
      Error('ایمیل وارد شده اشتباه است.',bgError)
    }
  })
  var emlInput = document.getElementById('input-email')
  emlInput.addEventListener('input', (e) => {
    var eamilValue = emlInput.value;
    if (/[a-zA-z0-9@.-_]/.test(e.data) == false) {
      emlInput.value = eamilValue.substr(0, eamilValue.length - 1)
    }
  })
  var numberElm = document.getElementById('input-number-1');
  numberElm.addEventListener('input', (e) => {
    var numberValue = numberElm.value;
    if (/[0-9]/.test(e.data) == false) {
      numberElm.value = numberValue.substr(0, numberValue.length - 1);
    }
  })
  var numberElm2 = document.getElementById('input-number-2');
  numberElm2.addEventListener('input', (e) => {
    var numberValue2 = numberElm2.value;
    if (/[0-9]/.test(e.data) == false) {
      numberElm2.value = numberValue2.substr(0, numberValue2.length - 1);
    }
  })
  var mobileBtn1 = document.getElementById('btn-mobile-1');
  mobileBtn1.addEventListener('click', function (e) {
    e.preventDefault();
    var mobileElmInput1 = document.getElementById('input-number-1');
    var mobileValue1 = mobileElmInput1.value.trim();
    if (mobileValue1.length == 11 && mobileValue1.startsWith('09') == true && (mobileValue1 / 2 != NaN)) {
      Error('لینک دانلوداپ با موفقیت ارسال شد.',bgsuccess)
    } else if (mobileElmInput1.value == NaN) {
      Error('لطفا شماره همراه خود را وارد کنید.',bgError)
    } else {
      Error('فرمت تلفن همراه اشتباه است.',bgError)

    }
  })
  var mobileBtn2 = document.getElementById('btn-mobile-2');
  mobileBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    var mobileElmInput2 = document.getElementById('input-number-2');
    var mobileValue2 = mobileElmInput2.value.trim();
    if (mobileValue2.length == 11 && mobileValue2.startsWith('09') == true && (mobileValue2 / 2 != NaN)) {
      Error('لینک دانلوداپ با موفقیت ارسال شد.',bgsuccess)

    } else if (mobileValue2 == NaN) {
      Error('لطفا شماره همراه خود را وارد کنید.',bgError)
    } else {
      Error('فرمت تلفن همراه اشتباه است.',bgError)
    }
  })
  var myTimeout;
  var myTime2;
  function Error(text,backG) {
    var toastElm = document.getElementById('liveToast');
    var contantToast = document.getElementById('content-toast')
    toastElm.style.backgroundColor=backG;
    toastElm.classList.remove('hide');
    toastElm.classList.add('show')
    contantToast.innerHTML = text;
    myTimeout = setTimeout(() => {
      closeToast('liveToast');

    }, 5000);
  }
  function closeToast(id){
          var toastElm = document.getElementById(id);
          toastElm.classList.replace('animate__fadeInUp','animate__fadeOutUp');
          myTime2 = setTimeout(()=>{
          toastElm.classList.remove('show');
          toastElm.classList.add('hide');
          toastElm.classList.replace('animate__fadeOutUp','animate__fadeInUp');
          },1000);
      }
      var mytime3;
      var closeBtn = document.getElementById('close-button');
      closeBtn.addEventListener('click', () => {
        clearTimeout(myTimeout);
          closeToast('liveToast');
      })
function openMegaMenu() {
    var headerMenu = document.getElementById('megaMenu');
    if(headerMenu.style.display=='none'){
      headerMenu.style.display = 'block';
    }
  }

  function closeMegaMenu(id) {
    var headerMenu = document.getElementById(id);
    headerMenu.style.display = 'none';
  }

  function openCategory(evt, type) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("mega-menu-body-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName("mega-menu-category-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("mega-menu-category-item-active", "");
    }

    document.getElementById(type).style.display = 'flex';
    evt.currentTarget.className += " mega-menu-category-item-active";
  }