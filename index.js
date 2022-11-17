let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [{
    quote:'“If you’re serious about changing your life, you’ll find a way. If you’re not, you’ll find an excuse.”',person:'Jen Sincero, author'
},{
    quote:'“Do one thing every day that scares you.” ',
    person:'Eleanor Roosevelt'
},
{
    quote:'“There is no passion to be found playing small—in settling for a life that is less than the one you are capable of living.”',
    person:'Nelson Mandela'
},
{
    quote:'“Your big opportunity may be right where you are standing right now.”',
    person:'Napoleon Hill'
},
{
    quote:'“There are far better things ahead than any we leave behind.” ',
    person:'C.S. Lewis'
},
{
    quote:'“The way to get started is to quit talking and begin doing.” ',
    person:'Walt Disney'
},
{
    quote:'“You will face many defeats in life, but never let yourself be defeated.”',
    person:'Maya Angelou'
},
{
    quote:'“Many of lifes failures are people who did not realize how close they were to success when they gave up.”',
    person:'Thomas A. Edison'
},{
    quote:'“Only a life lived for others is a life worthwhile.”',
    person:'Albert Einstein'
},
{
    quote:'“In three words I can sum up everything I have learned about life: it goes on.”',
    person:'Robert Frost'
},
{
    quote:'“To live is the rarest thing in the world. Most people exist, that is all.” ',
    person:'Oscar Wilde'
},
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})