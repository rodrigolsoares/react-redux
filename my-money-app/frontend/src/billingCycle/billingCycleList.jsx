import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getList, showUpdate, showDelete} from './billingCycleActions'

class BillingCycleList extends Component{

    componentWillMount(){
       this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []

        console.log(list)

        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick ={ () => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button> 

                    <button className='btn btn-danger' onClick ={ () => this.props.showDelete(bc)}>
                        <i className='fa fa-trash'></i>
                    </button> 
                    
                    

                </td>
            </tr>
        ))
    }

    render(){
        return (
            <div>
               <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th className='table-actions'>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
               </table>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispachToProps = dispatch => bindActionCreators(
    {getList, showUpdate, showDelete}, dispatch)
    
export default connect(mapStateToProps, mapDispachToProps)(BillingCycleList)
