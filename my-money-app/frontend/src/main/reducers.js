import {combineReducers} from 'redux'

import dashboardReducer from '../dashboard/dashboardReducers'

const rootReducer = combineReducers({
    dashboard:  dashboardReducer
})

export default rootReducer