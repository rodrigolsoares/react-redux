import {combineReducers} from 'redux'

import dashboardReducer from '../dashboard/dashboardReducers'
import tabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard:  dashboardReducer,
    tab: tabReducer
})

export default rootReducer