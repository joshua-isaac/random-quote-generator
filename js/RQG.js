// set quote var to new array
var quote = new Array()

// set author var to new array
var author = new Array()

// array of quotes
quote[0] = "The Way Get Started Is To Quit Talking And Begin Doing.";
quote[1] = "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty.";
quote[2] = "Don't Let Yesterday Take Up Too Much Of Today.";
quote[3] = "You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds Character.";
quote[4] = "It's Not Whether You Get Knocked Down, It's Whether You Get Up.";
quote[5] = "If You Are Working On Something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You";
quote[6] = "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.";
quote[7] = "Creativity Is Intelligence Having Fun.";
quote[8] = "Do What You Can With All You Have, Wherever You Are.";
quote[9] = "Whether You Think You Can Or Think You Can't, You're Right.";
quote[10] = "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.";

// array of authors
author[0] = "<i>-- Walt Disney<i>";
author[1] = "<i>-- Winston Churchill<i>";
author[2] = "<i>-- Will Rogers<i>";
author[3] = "<i>-- Unknown<i>";
author[4] = "<i>-- Vince Lombardi<i>";
author[5] = "<i>-- Steve Jobs<i>";
author[6] = "<i>-- Franklin D. Roosevelt<i>";
author[7] = "<i>-- Albert Einstein<i>";
author[8] = "<i>-- Theodore Roosevelt<i>";
author[9] = "<i>-- Henry Ford<i>";
author[10] = "<i>-- Helen Keller<i>";


// function that generates new quote
function newQuote(){
    
/* math.random picks a number from 0 - 1 (0 included, 1 excluded), it then multiplies that randomly chosen number by the length of the array (in this case 11). The Math.floor function rounds that number downward to the nearest integer */
    
    var randomNumber = Math.floor(Math.random()*(quote.length));

/* 

1. using document.getElementById you can enter a string and javascript will look through the HTML document and retrieve it for use. 'quoteDisplay' & 'authorDisplay' is used to retrieve the HTML element with the id of quoteDisplay & authorDisplay.
    
2. .innerHTML is used to pass through a randomly retrieved quote & author from the array as a value that will be added into the HTML quoteDisplay & authorDisplay Element  
    
3. Set .innerHTML equal to quotes/author array with the randomNumber variable as an array index number 

*/
    
    document.getElementById('quoteDisplay').innerHTML = quote[randomNumber];
    document.getElementById('authorDisplay').innerHTML = author[randomNumber];
}
