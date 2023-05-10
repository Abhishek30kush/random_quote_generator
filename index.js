const quotes = [
  {
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];


const quoteE1=document.getElementById("quote");
const btnE1=document.getElementById("btn");

function getRandomQuote(){
    const index=Math.floor(Math.random()*quotes.length);
    return quotes[index];
}

function renderQuote(){
    const {text, author}=getRandomQuote();
    quoteE1.innerHTML= `<p> "${text}" </p> <p>-${author}</p>`;
}

btnE1.addEventListener("click", renderQuote);
renderQuote();