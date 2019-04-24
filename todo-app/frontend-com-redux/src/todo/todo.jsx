import React, {Component} from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', list : []}
        
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }
    
    handleAdd(){
        const description = this.state.description
        Axios.post(URL, {description}).then(
            resp => this.refresh()
        )

    }

    handleRemove(todo){
        const description = this.state.description
        Axios.delete(`${URL}/${todo._id}`).then(
            resp => this.refresh(this.state.description)
        )

    }

    handleMarkAsDone(todo){
       
        const description = this.state.description
        Axios.put(`${URL}/${todo._id}`, {...todo, done:true}).then(
            resp => this.refresh(this.state.description)
        )
    }
    
    handleMarkAsPeding(todo){
       
        const description = this.state.description
        Axios.put(`${URL}/${todo._id}`, {...todo, done:false}).then(
            resp => this.refresh(this.state.description)
        )
    }
    

    refresh(description =''){
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`).then(
            resp => this.setState({...this.state, description: description, list: resp.data})
        )
    }

    handleClear(){
        this.setState({...this.state, description: '' })
        this.refresh() 
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({... this.state, description: e.target.value})
    }
    
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                
                <TodoForm description = {this.state.description}
                          handleAdd={this.handleAdd}
                          handleChange = {this.handleChange}
                          handleSearch = {this.handleSearch}
                          handleClear = {this.handleClear}/>

                <TodoList   handleRemove = {this.handleRemove}
                            handleMarkAsDone = {this.handleMarkAsDone}
                            handleMarkAsPeding = {this.handleMarkAsPeding} />

            </div>
        )
    }
}