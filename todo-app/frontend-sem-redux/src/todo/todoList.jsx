import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const renderRows = () =>{
        
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={ () => props.handleMarkAsDone(todo)}/>

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={ () => props.handleMarkAsPeding(todo)}/>

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
  