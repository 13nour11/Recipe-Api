// var element = document.getElementById('demo');

// try{
//     var x = 10;
//     console.log(x);

//     // to ceriate error
//     throw new Error("ay7aga Error"); // if there is not an/error at my code this error will be displayed, but if there is an error at my code, it will e displayed not my error which i ceriate
// }
// catch(error){
//     element.innerHTML = error;
// }

// API
// function getPizza(){
//     return new Promise(function(resolved,rejected){
//         // resolved = getPasta
//         // rejected = function(){ console.log('Error');}
//         var myHttp = new XMLHttpRequest();
//         var allRecipesArr = [];
//         myHttp.open('GET' , 'https://forkify-api.herokuapp.com/api/search?q=pizza'); // open the connection
//         myHttp.send(); // initiate the request

//         // To Retrieve The Recipes Data in 2 diffrent ways
//         myHttp.addEventListener('load',function(){
//             console.log('pizza');
//             allRecipesArr = JSON.parse(myHttp.response); // response => is a property to retrieve the data after request finishing
//             // console.log(allRecipesArr);
            
//             // if(callback){
//             //     callback();
//             // }
//             resolved();
//         });
//         myHttp.addEventListener('error',function(){
//             rejected('Error in getting pizza recipe') // call function
//         })
//     })
// }
// function getPasta(){
//     return new Promise(function(resolved,rejected){
//         var myHttp = new XMLHttpRequest();
//         var allRecipesArr = [];
//         myHttp.open('GET','https://forkify-api.herokuapp.com/api/search?q=pasta');
//         myHttp.send();
//         myHttp.addEventListener('load',function(){
//             console.log('pasta');
//             allRecipesArr = JSON.parse(myHttp.response);
//             // if(callback){
//             //     callback();
//             // }
//             resolved()
//         });
//         myHttp.addEventListener('error',function(){
//             rejected('Error in getting pasta recipe');
//         })
//     })
// }
// function getSalad(){
//     return new Promise(function(resolved,rejected){
//         var myHttp = new XMLHttpRequest();
//         var allRecipesArr = [];
//         myHttp.open('GET','https://forkify-api.herokuapp.com/api/search?q=salad');
//         myHttp.send();
//         myHttp.addEventListener('load',function(){
//             console.log('salad');
//             allRecipesArr = JSON.parse(myHttp.response).recipes;
//             // callback();
//             resolved()
//         });
//         myHttp.addEventListener('error',function(){
//             rejected('Error in getting salad recipe')
//             // callback();
//         });
//     })
// }
// getSalad()
// .then(function(){ return getPasta(); })
// .then(function(){ return getPizza();})
// .catch(function(errMsg){console.log(errMsg);}) // عملت فانكشن

function allDone(){
    console.log('All Done');
}
// To arrange the display as i want => use call-back-function 
// => this will make problem 'pyramids of doom or callBackHell, so that we will use promise(anonymousFunction), .then
// getSalad(function(){getPasta(getPizza)}); // salad pasta pizza

// myHttp.addEventListener('readystatechange',function(){
//     if(myHttp.readyState == 4){
//         console.log(JSON.parse(myHttp.response));
//     }
// })

// If there is an error at the request
// myHttp.addEventListener('error',function(){
//     alert('Error in loading data from server')   ; 
// })


// Promise, function().then(callBack)
// function one(){
//     return new Promise(function(callBack){
//         console.log('one');
//         callBack()
//     }) 
// }
// function two(){
//     return new Promise(function(callBack){
//         console.log('two');
//         callBack()
//     })
// }
// function three(){
//     return new Promise(function(callBack){
//         console.log('three');
//         callBack()
//     })
// }
// function allDone(){
//     console.log('All Done');
// }
// one().then(function(){two()}).then(function(){three()}).then(allDone)

// resolved => callBack1 => will be send by using => 'then' , rejected => callBack2 => will be send by using => 'catch'
// function one(){
//     return new Promise(function(resolved,rejected){
//         console.log('one');
//         var error = false; // there is no error
//         if(error == false){
//             resolved();
//         }else{
//             rejected()
//         }
//     })
// }
// function printError(){
//     console.log('Error');
// }
// one().then(two).catch(printError) // one two
// one().then(function(){two()}).catch(printError).then(function(){three()}).then(allDone) // one two three AllDone

// function hello(){
//     console.log('hiiiii');
//     return Promise.resolve(1);
// }
// hello().then(function(x){
//     console.log(x);
// });

// fetch('url',{method:''}) => its defualt method is 'GET'
// using 'await' with something which return promise and the function is 'async'

var allRecipesArr = [];
async function getRecipe(recipe){
    try{
        var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
    var finalData = await response.json();
    allRecipesArr =  finalData.recipes;
    displayRecipes();
    // console.log(finalData);
    // console.log(allRecipesArr);
    }
    catch(error){
        document.getElementById("rowData").innerHTML = `<div class='vh-100 d-flex align-items-center justify-content-center'><div class='alert alert-danger'><h2 class='text-center p-1'>${error}</h2></div></div>`
    }
}
getRecipe('pizza');
function displayRecipes(){
    var cartona = ``;
    for(var i =0; i<allRecipesArr.length;i++){
        cartona  += `
        <div class="col-md-2 py-2">
        <div class="recipe">
            <h2 class="h6">${allRecipesArr[i].title.split(' ').slice(0,2).join(' ')}</h2>
            <img src="${allRecipesArr[i].image_url}" alt="" class="w-100"/>
        </div>
    </div>
        `
    }
    document.getElementById("rowData").innerHTML = cartona;
}