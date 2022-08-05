// const second = () => {
//    setTimeout( () =>{
//     console.log('Async Hey there');
//    }, 2000);
// }

// const first = () => {
//     console.log('Hey there');
//     second();
//     console.log('The end')
// }
// first();

    function getrecipe(){
        setTimeout( () =>{
            const recipeID = [189, 236, 873, 382];
            console.log(recipeID);
        }, 1500)
    }
    getrecipe();