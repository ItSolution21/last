//snycronized = code which runs line by line

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

//async = code which runs when it can

console.log("*********************************");

// setTimeout(() => {
//     console.log('1');
// }, 2000);

// console.log('2');
// console.log('3')

// setTimeout(() => {
//     console.log('4');
// }, 1000);

// setTimeout(() => {
//     console.log('5');
// }, 5000);

// 3 kam

//1. cook
//2. kitchen
//3. trash

// function cook() {
//     setTimeout(() => {
//         console.log("I cook the food")
//     }, 3000);
// }

// function kitchen() {
//     setTimeout(() => {
//         console.log("I clean the kitchen")
//     }, 2000);
// }

// function trash(){
//     setTimeout(() => {
//         console.log("I clean the trash")
//     }, 500);
// }

// cook();
// kitchen();
// trash();

//callback funtion - function which is passed in another function as an argument
function cook(callback) {
  setTimeout(() => {
    console.log("I cook the food");
    callback();
  }, 3000);
}

function kitchen(callback) {
  setTimeout(() => {
    console.log("I clean the kitchen");
    callback();
  }, 2000);
}

function trash(callback) {
  setTimeout(() => {
    console.log("I clean the trash");
    callback();
  }, 500);
}

//callback hell -- callback hell is a problem in javascript

cook(
    () => {
        kitchen(
            () => {
                trash(
                    () => {
                        console.log("I done all my work");
                    }
                )
            }
        )
    }
)

// cook();
// kitchen();

//promise - a promise is an object that represents
    //  the eventual completion or failure of an asynchronous operation

    // promise is also a function which return two value -- resolve and reject
    // resolve - ans agaya 
    // reject - error agayi 


    function cook() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I cooked the food");
            }, 3000);
        });
      }
      
      function kitchen() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I cleaned the kitchen");
            }, 2000);
        });
      }
      
      function trash() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I cleaned the trash");
            }, 500);
        });
      }

      function watchTV(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I watched the TV");
            }, 1000);
        });
      }
    // cook().then((value) => {console.log(value); return kitchen();})
    //     .then((value) => {console.log(value); return trash();})
    //     .then((value) => {console.log(value); console.log("I done all my work")});


    async function work(){
        try{

            const result1 = await cook();
            console.log(result1);
            const result4 = await watchTV();
            console.log(result4);
            const result2 = await kitchen();
            console.log(result2);
            const result3 = await trash();
            console.log(result3);
            
            
        }catch(error){
            console.log(error);
        }

    }

    work();