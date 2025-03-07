// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 /*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));
 */


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 2, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
            getInstruction("mashedPotatoes", 3, (step4) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                getInstruction("mashedPotatoes", 4, (step5) => {
                  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;                
                });
            });
        });
    });
}), (error) => console.log(error);


 /* function getInstructions (step, callback, errorCallback) {
   setTimeout(() => {
     console.log (mashedPotatoes[step]);
     if(!mashedPotatoes[step]) errorCallback("Instructions not found.");
     else callback();
   }, 1000);
 };

  getInstructions(0, ()=> {
   getInstructions(1, ()=> {
    getInstructions(2, ()=> {
     getInstructions(3, ()=> {
      getInstructions(4, ()=> {

          });   
        });
      });
    });
  });
   */



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then ((step0) =>{
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  })   


  /* .then ((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`     
  })
  .then ((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`     
  })
  .then ((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`     
  })
  .then ((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`     
  })
  .then ((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`     
  })
  .then ((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`     
  })
  .then ((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`     
  }) */


// Iteration 3 using async/await
async function makeBroccoli(){
  
  await obtainInstruction ('broccoli' , 0)
}




// Bonus 2 - Promise all
// ...