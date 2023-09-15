let quotes = [
    {quote:"Less is More", 
    author:"Ludwig Mies Van Der Rohe"},
{quote:"God is in the Details", 
author:"Ludwig Mies Van Der Rohe"},
{quote:"Architecture starts when you carefully put two bricks together. There it begins", 
author:"Ludwig Mies Van Der Rohe"},
{quote:"Good building come from good people and all problems are solved by good design",
author: "Stephen Gardiner"},
{quote:"There are 360 degrees, so why stick to one?",
author: "Zaha Hadid"},
{quote:"Form ever follows function", 
author:"Louis Sullivan"},
{quote:"Recognizing the need is the primary condition of design",
author: "Charles Eames"},
{quote:"Architecture is the learned game, correct and magnificent, of forms assembled in the light", 
author:"Le Corbusier"},
{quote:"An idea is salvation by imagination", 
author:"Frank Lloyd Wright"},
{quote:"When I'm working on a problem, I never think about beauty. But when I've finished, if the solution is not beautiful I know it's wrong", 
author:"Buckminster Fuller"},
{quote:"As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown", 
author:"Norman Foster"},
{quote:"To provide meaningful architecture is not to parody history but to articulate it", 
author:"Daniel Libeskind"},
{quote:"To create, one must first question everything", 
author:"Eileen Gray"},
{quote:"One of the great beauties of architecture is that each time, it is like life starting all over again",
author: "Renzo Piano"},
{quote:"You’ve got to bumble forward into the unknown",
author: "Frank Gehry"}
];
let h1= document.querySelector('h1');
let h2 = document.querySelector('h2');
let button = document.querySelector('button');
button.addEventListener("click",()=> {

    let index = Math.floor(Math.random()*quotes.length);
    h1.innerText = quotes[index].quote;
    h2.innerText=quotes[index].author;
});
