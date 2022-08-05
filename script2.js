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
    // function getrecipe(){
    //     setTimeout( () =>{
    //         const recipeID = [189, 236, 873, 382];
    //         console.log(recipeID);

    //         setTimeout( id =>{
    //             const recipe = {title: 'Fresh Tomat pasta', publisher: 'Yoni'};
    //             console.log(`${id}: ${recipe.title}`);

    //             setTimeout( publisher =>{
    //                 const recipe2 = {title: 'italian pizza', publisher: 'Yoni'};
    //                 console.log(recipe2);

    //             }, 1500, recipe.publisher);
    //         }, 1500, recipeID[2]);
    //     }, 1500);
    // }
    // getrecipe();

    const getIDs =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([189, 236, 873, 382]);
        }, 1500 );
    });

    const getrecipe = recID =>{
        return new Promise((resolve, reject) => {
            setTimeout( ID => {
                const recipe = {title: 'Fresh Tomato pasta', publisher: 'Yoni'};
                resolve(`${ID}: ${recipe.title}`);
            }, 1500, recID);
        });
    };
     const getRelated = publisher => {
        return new Promise( (resolve, reject) => {
            setTimeout( pub => {
                const recipe2 = {title: 'italian pizza', publisher: 'Yoni'};
                resolve( `${pub}: ${recipe2.title}`);
            }, 1500, publisher);
        });
     };

    getIDs.then(IDs =>{
        console.log(IDs);
        return getrecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated('Yoni');
    }) 
    .then(recipe =>{
        console.log(recipe);
    })
    .catch(error =>{
        console.log('error!!'); 
    });