import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const item = document.querySelector('.nav__item');
const navLinks = document.querySelectorAll('.nav__item-link');
const windowPathname = window.location.pathname;

navLinks.forEach(link => {
  const navLinkPathname = new URL(link.href).pathname;

  if (windowPathname === navLinkPathname) {
    link.classList.add('nav__item-link--current');

    const active = document.createElement('div');
    active.className = 'nav__active';

    const state = Flip.getState(active);
    link.parentElement.appendChild(active);
    Flip.from(state, {
      duration: 0.8,
      absolute: true
    });
  }
});

// В докладе Мария рассказывает о состоянии стандарта ECMAScript. Проводит мини-экскурс в стандарты и proposals. Говорит про TC39, Interop — кто все эти люди. О тех proposals, которые уже вот-вот (и позже) войдут в стандарт, и о том, почему у нас до сих пор нет нормальной работы со временем (Temporal). Почему JavaScript до сих пор не стал еще более функциональным при помощи pipe-оператора, и какими скоро станут декораторы. А также проходится по новым Web API, которые появились или скоро появятся.


let games = [
  {year: 2015, author: 'CD Project RED', title: 'The Witcher 3'},
  {year: 2020, author: 'CD Project RED', title: 'Cyberpunk 2077'},
  {year: 2022, author: 'From Software', title: 'Elder Ring'},
  {year: 2023, author: 'Mundfish', title: 'Atomic Heart'}
];

// let game, index;
// let i = games.length - 1;

// while (i > 0 && !game && !index) {
//   if (games[i].author === 'From Software') {
//     game = games[i];
//     index = i;
//   }

//   --i;
// }

// const game = games.findLast(({ author }) => author === 'author1');

// const game1 = games.findLastIndex(({ author }) => author === 'author1');

// console.log(game, game1);

const date = Temporal.Nov.zonedDateTimeISO();
const { year, month, day, hour, minute, second, milisecond } = date;

console.log(
  year,
  month,
  day,
  hour,
  minute,
  second,
  milisecond
);
