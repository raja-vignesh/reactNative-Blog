
const initialState = {

}

const RecipeReducer = (state = initialState,action) => {
    console.log('RecipeReducer')
    switch (action.type) {
        case 'RECIPE_LIST':
            console.log('in RECIPE_LIST')
            return state
        case 'CREATE_RECIPE':
            return state;
        case 'CREATE_RECIPE_ERROR':
            return state;
        default:
            return state
           
    }
}

export default RecipeReducer;