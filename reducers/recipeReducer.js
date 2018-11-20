
const initialState = {

}

const RecipeReducer = (state = initialState,action) => {
    console.log('RecipeReducer')
    switch (action.type) {
        case 'RECIPE_LIST':
            console.log('in RECIPE_LIST')
            return state
        default:
            return state
           
    }
}

export default RecipeReducer;