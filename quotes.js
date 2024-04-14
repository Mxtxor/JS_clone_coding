const quote = document.querySelector("div#quotes span:first-child");
const author = document.querySelector("div#quotes span:last-child");

const quotes = [
  {
    quote: '자신의 삶을 사랑하는 것이 가장 위대한 모험이다.', author: '오스카 와일드'
  },
  {
    quote: '미래는 우리가 만드는 것이다.', author: '벤자민 프랭클린'
  },
  {
    quote: '모든 인생의 순간은 영원하다.', author: '마하트마 간디'
  },
  {
    quote: '세상을 바꾸기 위해 무엇인가를 하라. 그렇지 않으면 세상이 나를 바꾸어버릴 것이다.', author: '마틴 루터 킹 주니어'
  },
  {
    quote: '성공은 실패를 두려워하지 않는 사람만이 이룰 수 있다.', author: '마야 안젤로'
  },
  {
    quote: '삶은 누가 주도하느냐에 따라 달라진다.', author: '엘리너 루즈벨트'
  },
  {
    quote: '우리가 변화하지 않으면 세상도 변화하지 않는다.', author: '가브리엘 가르시아 마르케스'
  },
  {
    quote: '모든 인생의 행복은 균형에 있다.', author: '장자'
  },
  {
    quote: '지혜로운 자는 자신의 감정을 통제한다.', author: '공자'
  },
  {
    quote: '삶은 스스로를 발견하는 과정이다.', author: '파울로 코엘료'
  }
];
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.author;
author.innerText = todaysQuote.quote;