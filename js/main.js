var btn = document.getElementById ('btn');
var output = document.getElementById ('output');
var quotes =[
    '"Resentment is like drinking poison and waiting for your enemies to die.--Nelson Mandela"'
    ,'"The best revenge is massive success.--Frank Sinatra"'
    ,'"You miss 100% of the shots you dont take.--Wayne Gretzy"'
    ,'"Do not take life too seriously. You will not get out alive.--Elbert Hubbard"'
    ,'"Its not what happens to you, but how you react to it that matters.--Epictetus"'
   
];



btn.addEventListener('click' , function() {
    var randomQuotes =quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML=randomQuotes;
})
