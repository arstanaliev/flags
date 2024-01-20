// let btn = document.querySelector('.btn')
// let carta = document.querySelector('.carta')

// fetch(`https://restcountries.com/v3.1/all`)
// .then((flag) => flag.json())
// .then((res) => {
//     console.log(res);
// res.slice(0,3).map((el) => {
//     let img = document.createElement('img')
//     let div = document.createElement('div')


//     img.src = el.flags.svg;

//     div.append(img)
//     carta.append(div)
     

//     btn.addEventListener('click', () => {
//         flags.style.display = ''
//     })
//     flags.style.display = 'none'
// })
// })






















let getCarta = document.querySelector('.carta'); 
let getBtn = document.querySelector('.btn'); 
 
getBtn.addEventListener('click', function () { 
    generateflag(); 
  }) 
   
  getCnts(); 
   
let countries = []; 
 
function getCnts() { 
  fetch('https://restcountries.com/v3.1/all') 
    .then((response) => response.json()) 
    .then((data) => { 
      countries = data; 
      displayFlags(); 
    }) 
} 
 
function displayFlags() { 
  let flags = localStorage.getItem('flags'); 
  if (flags) { 
    flags = JSON.parse(flags); 
    flags.forEach((flag) => { 
      Flag(flag); 
    }) 
  } else { 
    generateflag(); 
  }; 
} 
 
function Flag(flag) { 
  let img = document.createElement('img');
  let div =document.createElement('div') 
  img.src = flag; 
  div.append(img)
  getCarta.append(div)
} 
 
function generateflag() { 
  let randomind = Math.floor(Math.random() * countries.length); 
  let randomcntr = countries[randomind]; 
  let randomflag = randomcntr.flags.png; 
  Flag(randomflag); 
  let flags = localStorage.getItem('flags'); 
  if (flags) { 
    flags = JSON.parse(flags); 
    flags.push(randomflag); 
  } else { 
    flags = (randomflag); 
   
  localStorage.setItem('flags', JSON.stringify(flags)); 
}}