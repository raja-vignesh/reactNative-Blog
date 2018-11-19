
const initialState = {
    recipes:[
        {id:1,title:'This is title 1',content:'This is content from redux 1',author:'xx yy'},
            {id:2,title:'This is title 2',content:'This is content from redux 2',author:'aa bb'},
            {id:3,title:'This is title 3',content:'This is content from redux 3',author:'zz bb'}
    ]
}

const RecipeReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'RECIPE_LIST':
            console.log('in RECIPE_LIST')
            return state.recipes
        default:
            return state
           
    }
}

export default RecipeReducer;