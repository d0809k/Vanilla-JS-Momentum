const quotes = [
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    quote:
      "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "탈무드",
  },
  {
    quote: "작은 기회로 부터 종종 위대한 업적이 시작된다",
    author: "데모스테네스",
  },
  {
    quote:
      "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭",
  },
  {
    quote: "끝을 맺기를 처음과 같이 하면 실패가 없다",
    author: "노자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
