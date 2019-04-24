const INITIAL_STATE = {
    description: 'Ler livro',
    list:[{
        _id: 1, 
        description: 'Estudo Java 2',
        done: true
    },{
        _id: 2, 
        description: 'Estudo React',
        done: false
    },{
        _id: 3, 
        description: 'Estudo Angular',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) =>{

    switch(action.type){
        case 'DESCRIPTION_CHANGE' : 
            return {...state, description: action.payload}
        default:
            return state

    }

}