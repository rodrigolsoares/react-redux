import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import {markAsDone, markAsPeding} from './todoAction'

const TodoList =  props => {
    
    const renderRows = () =>{
        
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={ () => props.markAsDone(todo)}/>

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={ () => props.markAsPeding(todo)}/>

                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={ () => props.handleRemove(todo)}/>
                </td>
            </tr>
        ))
    }
    
    
    return (

        <table className='table'>
            <thead>
                <tr>
                    <td>Descrição</td>
                    <td className='tableActions'>Ações</td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )
}
  
const mapStateToProps = state => ({list: state.todo.list})

const mapDispatchToProps = dispach => 
    bindActionCreators({markAsDone, markAsPeding}, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)