const currency = "inr"


fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
.then((res)=> res.json())
.then((data)=> console.log(data))
.catch((reject)=> console.log(reject))



// let a = document.querySelector('h1')

// const hello = ()=>{
//     console.log("helo");
    
// }

// a.addEventListener('click', hello)