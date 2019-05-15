import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabAction'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}
const BASE_URL = 'http://localhost:3003/api'

export function getList() {

    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){

    return dispatch => {

        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => 
                toastr.error('Erro', error)
            )
        })

    }
    
   
}


export function init() {
    return [
        resetForm('billingCycleForm'),
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}