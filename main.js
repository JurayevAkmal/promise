// function set(){
//     console.log("install...");
// }
// let stop = setTimeout(set, 2000)
// function set1(){
//     console.log("complete");
//     clearTimeout(stop);
// }
// setTimeout(set1, 5000)


// function set(){
//     console.log("install...");
// }
// let stop = setTimeout(set, 2000)
// function set1(){
//     console.log("complete");
//     clearTimeout(stop);
// }
// setTimeout(set1, 5000)



// let time = new Date();
// let vaqt = time.getHours();
// let is_shop_open = false;
// if (vaqt >= 10){
//     is_shop_open = true
// }

// let order = (time, work) => {
//        return new Promise((res, rej) =>{
//         if(is_shop_open){
//             setTimeout(() =>{
//                 res(work())
//             }, time)
//         }else{
//             rej(console.log('dokon yopildi'))
//         }
// })
// }
// order(2000, () => {
//     console.log('started');
// })
// .then(()=> {
//     return order(2000, ()=> console.log('f chopped'))
// })
// .then(() => {
//     return order(2000, () => console.log('ice and water'))
// })


// function delay(time) {
//     return new Promise(resolve => {
//       setTimeout(resolve, time);
//     });
//   }
//   delay(2000)
//   .then(() => console.log('2 seconds have passed'));
  

// const hello1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Assalom Aleykum');
//   }, 1000);
// });

// hello1.then(result => {
//   console.log(result);
// })


// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('salom');
//   }, 2000);
// });

// promise1.then(result => {
//   console.log(result);
//   return promise2;
// }).then(result => {
//   console.log(result);
// }).catch(error => {
//   console.error(error);
// });



// const call = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('called'));
//   }, 1000);
// });

// call.then(result => {
//   console.log(result);
// }).catch(error => {
//   console.error(error);
// });



let car = new Promise((res, rej) => 
{
  setTimeout(() => {
    rej(console.log('errror'));
  }, 1000)
});