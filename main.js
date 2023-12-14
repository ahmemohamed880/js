function generate(){
    var quote=[`Be yourself everyone else is already taken  <br> <br>--Oscar Wilde`,
   " Two things are infinite: the universe and human stupidity; and I am not sure about the universe <br> <br>--Albert Einstein",
   "A room without books is like a body without a soul <br><br>-- Marcus Tullius Cicero",
   "In three words I can sum up everything I've learned about life it goes on <br><br>--Robert Frost"
]
quote = quote[Math.floor(Math.random() * quote.length)];
var element=document.getElementById('text');
element.innerHTML=quote
}