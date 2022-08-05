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

//call back hell
    function getrecipe(){
        setTimeout( () =>{
            const recipeID = [189, 236, 873, 382];
            console.log(recipeID);

            setTimeout( id =>{
                const recipe = {title: 'Fresh Tomat pasta', publisher: 'Yoni'};
                console.log(`${id}: ${recipe.title}`);

                setTimeout( publisher =>{
                    const recipe2 = {title: 'italian pizza', publisher: 'Yoni'};
                    console.log(recipe2);

                }, 1500, recipe.publisher);
            }, 1500, recipeID[2]);
        }, 1500);
    }
    getrecipe();