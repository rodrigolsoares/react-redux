import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Field, arrayInsert, arrayRemove} from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import IF from '../common/operator/if'

class CreditList extends Component{

    add(index, item = {}) {
            
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
            
        if(!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }



    renderRows(){
        const list = this.props.list || []

        return list.map((item, index)=>(

            <tr key={index}>
                <td> <Field name={`${this.props.field}[${index}].name`} component={Input} 
                            placeholder= 'Informe o nome' 
                            readOnly={this.props.readOnly} /> </td>

                <td> <Field name={`${this.props.field}[${index}].value`} component={Input} 
                            placeholder= 'Informe o valor' 
                            readOnly={this.props.readOnly} /> </td>
                
                <IF test={this.props.showStatus}>
                        
                    <td> <Field name={`${this.props.field}[${index}].status`} component={Input} 
                            placeholder= 'Informe o status' 
                            readOnly={this.props.readOnly} /> </td>

                </IF>
                <td> 

                    <button type='button' className='btn btn-success'
                            onClick={()=> this.add(index + 1)}>
                        <i className='fa fa-plus' />
                    </button>

                    <button type='button' className='btn btn-warning'
                            onClick={()=> this.add(index + 1, item)}>
                        <i className='fa fa-clone' />
                    </button>

                    <button type='button' className='btn btn-danger'
                            onClick={()=> this.remove(index)}>
                        <i className='fa fa-trash-o' />
                    </button>

                </td>
            </tr>

        ))

    }

    render(){

        return (
            <Grid cols={this.props.cols}>
                <legend> {this.props.legend} </legend>
                <table className='table'>
                    <thead>
                        <th>Nome</th>
                        <th>Valor</th>
                        <IF test={this.props.showStatus}>
                            <th>status</th>
                        </IF>
                        <th className='table-actions'>Ações</th>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )

    }
}

const mapDispatchToProps = dispach =>bindActionCreators(
    {arrayInsert, arrayRemove}, dispach) 
export default connect(null,mapDispatchToProps)(CreditList)