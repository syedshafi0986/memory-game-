let cardsarray=[
    {
        name:'instagram',
        img:'./images/instagram.png',
    },
    {
        name:'github',
        img:'./images/github.png',
    
    },
    {
        name:'twitter',
        img:'./images/twitter.png',
    
    },
    {
        name:'1plus',
        img:'./images/1plus.jpg',
    
    },
    {
        name:'social',
        img:'./images/social.png',
    
    },
    {
        name:'mustang',
        img:'./images/mustang.jpg',
    
    },
    {
        name:'instagram',
        img:'./images/instagram.png',
    },
    {
        name:'github',
        img:'./images/github.png',
    
    },
    {
        name:'twitter',
        img:'./images/twitter.png',
    
    },
    {
        name:'1plus',
        img:'./images/1plus.jpg',
    
    },
    {
        name:'social',
        img:'./images/social.png',
    
    },
    {
        name:'mustang',
        img:'./images/mustang.jpg',
    
    },
]
console.log(cardsarray)
let cardschoosen=[];
let cardschoosenid=[];
let msgs=document.querySelector('.msg')
let blank=document.querySelector('.Blankmsg')
let scorediv=document.querySelector('h1')
const cardswon=[];

let gridDisplay=document.querySelector('.grid');
function start(){
    cardsarray.sort(()=>0.5-Math.random())

gridDisplay.classList.remove('hidden')
    function createBoard(){
        for(let i=0;i<cardsarray.length;i++){
        //we are creating an element usng createElement method for our conviniece since its harder to write image tag frequently
        const card=document.createElement('img');
        //we have another method called set attribute which will set the attribute for the created element
        card.setAttribute('src','./images/code.jpg')
        card.setAttribute('data-id',i)
        //this is how set attribute works firstly we must assign the attribute name next we are suppose to assign its value 
        // console.log(card,i)
        // gridDisplay.insertAdjacentElement('beforeend',card)//we have another alternative of this 
        gridDisplay.appendChild(card)
        card.addEventListener('click',flipcard)
        //there is a difference in flipcard() and flipcard
        //()means we are calling it straight away without even clicking on it but flipcard means we are calling it only when it is clicked
    }
}
function check(){
    console.log('check for match')
    const cardscreated=document.querySelectorAll('img');
    const option1=cardscreated[cardschoosenid[0]]
    const option2=cardscreated[cardschoosenid[1]];
    if(cardschoosen[0]===cardschoosen[1]){
        setTimeout(msg('yay its'),100)
        // alert('yay! its a match')
        option1.setAttribute('src','./images/blank.png')
        option2.setAttribute('src','./images/blank.png')
        option1.removeEventListener('click',flipcard)
        option2.removeEventListener('click',flipcard)
        // setTimeout(blankmsg,500);
        cardswon.push(cardschoosen[0])
        // cardswon.push(cardschoosen[1])
        console.log(cardswon)

        
    }else{
        setTimeout(msg('not'),100)
        option1.setAttribute('src','./images/code.jpg')
        option2.setAttribute('src','./images/code.jpg')
        // setTimeout(blankmsg,150);
        
        
    }
    scorediv.textContent=`score:${cardswon.length}`
    // msgs.textContent=''
    cardschoosen=[]
    cardschoosenid=[]
    // console.log(option1)
    // console.log(option2)
    if(cardswon.length==(cardsarray.length)/2){
        // console.log(cardswon.length)
        gridDisplay.classList.add('hidden')
        // console.log(cardsarray.length/2)
    }
}
function msg(str){
    msgs.textContent=`${str} a match`
}
function blankmsg(){
    msgs.textContent=''
    
}
createBoard();
function flipcard(){
    setTimeout(blankmsg,100);
const cardID = this.getAttribute('data-id')
console.log(cardsarray[cardID].name)
cardschoosen.push(cardsarray[cardID].name)
cardschoosenid.push(cardID);
console.log(cardschoosenid)
this.setAttribute('src',cardsarray[cardID].img)
//now we have to check whether the 2 cards are similar or not for tht we have to check the CARDSCHOOSEN ARRAY 
//IN SIMPLE WORDS WE HAVE TO CHECK WHETHER THE FIRST 2 ELEMENTS OF THE CARDSCHOOSEN ARE SMILAR OR NOT
console.log(cardschoosen)
if(cardschoosen.length==2){
    setTimeout(check,1000)
    
}

// else{
    //     alert('match not found')
// }

     
    
// console.log(cardID)


}
}
start();
// const btn=document.querySelector('button')
// btn.addEventListener('click',reset);
// function reset(){
// start()}
// btn.value=reset
