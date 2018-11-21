// const RecipeListAction = () => {
//     console.log('RecipeListAction')
//     return (dispatch,action) =>{
//        return dispatch({type:'RECIPE_LIST'})
//     }
// }

const AddRecipe = (recipe) => {
    console.log('Add Recipe')
    return (dispatch,state,{getFirebase,getFirestore}) => {
        const firestore = getFirestore()
        //const profile = state().firebase.profile;
        //const authorId = state().firebase.auth; 
        console.log('Add Recipe')
        firestore.collection('recipes').add({
            ...recipe,
            authorForeame:'test',
            authorSurname:'testing',
            createdAt:new Date(),
        }).then( () =>
             dispatch({type:'CREATE_RECIPE',recipe})
        ).catch(
            (err) => 
             dispatch({type:'CREATE_RECIPE_ERROR',err})
        )
    }
}


export default AddRecipe;