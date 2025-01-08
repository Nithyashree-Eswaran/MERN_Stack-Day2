
//Asynchronous JavaScript//

//setTimeout

const fun1=()=>{
    setTimeout(() =>{
        console.log("BANGTAN BOYS")
    },5000);
}

const fun2=()=>{
    console.log("ARMY");
}
fun1();
fun2();


//setInterval


let i = 0;
const interval = setInterval(() => {
  console.log("Hello World");
  i++;
  if (i === 3) {
    clearInterval(interval);
  }
}, 3000);

   

//Promise

let fetchData = new Promise((resolve, reject) => {
    let success = true; 
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); 
  });
  
  fetchData
    .then((data) => {
      console.log(data); 
    })
    .catch((error) => {
      console.log(error); 
    })
    .finally(() => {
      console.log("Operation complete.");
    });
  



// API request

const data = () => {
    
    return fetch("https://jsonplaceholder.typicode.com/todos/1") 
      .then((response) => {
   
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
      });
  };
  
  data()
    .then((result) => {
      console.log("Data fetched successfully:", result); 
    })
    .catch((error) => {
      console.log("Error fetching data:", error); 
    });
  








