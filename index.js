// Кнопка поиска

document.querySelector('.header__form-btn-search').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.header__form-input-search').classList.toggle('header__form-input-search-active');
});

// Бургер-меню

document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('header__burger-active');
  document.querySelector('.header__top__nav').classList.toggle('header__top__nav-active');
  document.querySelector('.header__burger-bg').classList.toggle('header__burger-bg-active');
  document.querySelector('.header__bottom__nav').classList.toggle('header__bottom__nav-active');
});

// Плеер header

document.querySelector('.header__bottom__btns-btn-players-archive').addEventListener('click', function () {
  document.querySelector('.header__bottom__btns-btn-players-archive .passive').classList.toggle('btn-active');
});

document.querySelector('.header__bottom__btns-btn-players-ether').addEventListener('click', function () {
  document.querySelector('.header__bottom__btns-btn-players-ether .passive').classList.toggle('btn-active');
});

// Плеер header в мобилке

document.querySelector('.header__bottom__btns-mobil').addEventListener('click', function () {
  document.querySelector('.header__bottom__btns').classList.toggle('header__bottom__btns-active');
  document.querySelector('.header__bottom__btns-mobil').classList.toggle('header__bottom__btns-mobil-active');
  document.querySelector('.header__bottom').classList.toggle('header__bottom-active');
});

// Плавный скролл по ссылке (навигация header и footer)

const anchors = document.querySelectorAll('.header__top__nav-link, .footer__top-nav-link');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// Еще подкасты

document.querySelector('.podcasts__more__btn').addEventListener('click', function () {
  var elements = document.getElementsByClassName('podcasts__item');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcasts__item-active");
  }
});

document.querySelector('.podcasts__more__btn').addEventListener('click', function () {
  document.querySelector('.podcasts__more__btn').classList.toggle('podcasts__more__btn--passive');
});

// Переключение кнопки подкаста

const buttons = document.querySelectorAll('.podcasts__card__player');

for (let button of buttons) {
  button.addEventListener("click", function(e) {
    let activeBtn = document.querySelector('button.pause');
    if (activeBtn && activeBtn !== e.target) {
      activeBtn.classList.remove('pause');
    }
    button.classList.toggle('pause');
  });
}

// Счетчик статистики подкастов

const listened = document.querySelectorAll('.podcasts__card-listened');
const liked = document.querySelectorAll('.podcasts__card-liked');
const shared = document.querySelectorAll('.podcasts__card-shared');

for (let btn of listened) {
  btn.addEventListener("click", function () {
    const statID = btn.getAttribute('id').substring();
    var count = document.getElementById(statID).innerHTML;
    count++;
    document.getElementById(statID).innerHTML = count;
  });
}

for (let btn of liked) {
  btn.addEventListener("click", function (e) {
    const statID = btn.getAttribute('id').substring();
    var count = document.getElementById(statID).innerHTML;
    count++;
    document.getElementById(statID).innerHTML = count;
  });
}

for (let btn of shared) {
  btn.addEventListener("click", function (e) {
    const statID = btn.getAttribute('id').substring();
    var count = document.getElementById(statID).innerHTML;
    count++;
    document.getElementById(statID).innerHTML = count;
  });
}

// Кастомный выбор автора (Передачи)

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});

// Аккордеон (Гости)

new Accordion('.guests__accordion__list', {
  elementClass: 'guests__accordion__item',
  triggerClass: 'accordion-top',
  duration: 600,
  collapse: true,
  showMultiple: false
});



// Табы (Гости)

document.querySelectorAll('.guests__tabs-link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.guests__tabs-link').forEach(function (btn) {
      btn.classList.remove('guests__tabs-link--active');
    });
    e.currentTarget.classList.add('guests__tabs-link--active');
    document.querySelectorAll('.guests__tabs-content-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('guests__tabs-content-item--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__tabs-content-item--active');
  });
});

// Плавный скролл гостей в мобилке

const guests = document.querySelectorAll('.guests__tabs-link');

for (let guest of guests) {
  guest.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = guest.getAttribute('href').substring(1);
    console.log(blockID);
    if (screen.width <= 970 || screen.height <= 400) {
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  });
}

// Выбор одного чекбокса (Плейлисты, для табуляции с клавиатуры)

const radiobtns = document.querySelectorAll('.playlists__genre-radiobtn');

for (let radio of radiobtns) {
  radio.addEventListener("click", e => {
    let activeBtn = document.querySelectorAll('.playlists__genre-radiobtn');
    for (var i = 0; i < activeBtn.length; i++) {
      if (activeBtn[i].checked === true) {
        activeBtn[i].checked = false;
      }
      e.target.checked = true;
    }
  });
}

//Изменение чекбокса на радиокнопки для мобилки

// for (let radio of radiobtns) {
//   if (screen.width <= 570) {
//     radio.setAttribute('type', 'radio');
//   }
// }

// Слайдер (О нас)

new Swiper('.about__content-swiper', {

  loop: true,

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    902: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 2.32,
      spaceBetween: 20,
    },
    255: {
      slidesPerView: 2.32,
      spaceBetween: 20,
    }
  }
});

// Валидация формы (О нас) 

new JustValidate('.about__form', {
  colorWrong: 'var(--color-error_color)',
  rules: {
    textarea: {
      required: true
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 35
    },
    mail: {
      required: true,
      email: true
    }
  },
  messages: {
    textarea: {
      required: 'Напишите Ваше сообщение'
    },
    name: {
      required: 'Укажише Ваше имя',
      minLength: 'Имя слишком короткое',
      maxLength: 'Имя слишком длинное'
    },
    mail: {
      required: 'Укажите Ваш email',
      email: 'Указанный email не является почтой'
    }
  },
  submitHandler: function (form, values, ajax) {
    ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      data: values,
      async: true,
      callback: function(response)  {
        console.log(response);
      }
    });
    window.location.reload();
  }
});

// Модальное окно (Вход)

new HystModal({
  linkAttributeName: 'data-hystmodal'
});

// Валидация входа

new JustValidate('.hystmodal__form', {
  colorWrong: 'var(--color-error_color)',
  rules: {
    login: {
      required: true,
      minLength: 2,
      maxLength: 35
    },
    password: {
      required: true,
      minLength: 8,
      password: true
    },
  },
  messages: {
    login: {
      required: 'Введите логин',
      minLength: 'Логин слишком короткий',
      maxLength: 'Логин слишком длинный',
    },
    password: {
      required: 'Введите пароль',
      minLength: 'Минимальная длина пароля 8 символов',
      password: 'Пароль должен содержать хотя бы одну букву и цифру'
    }
  },
  submitHandler: function (form, values, ajax) {
    ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      data: values,
      async: true,
      callback: function(response)  {
        console.log(response);
      }
    });
    window.location.reload();
  }
});