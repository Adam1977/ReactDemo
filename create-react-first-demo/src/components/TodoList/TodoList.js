import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleListDelete = this.handleListDelete.bind(this)
    }
    handleBtnClick() {
        console.log('handleBtnClick')
        this.setState((state) => ({
            list: [...state.list, state.inputValue],
            inputValue: ''
        }))
    }
    handleInputChange(e) {
        console.log('handleInputChange')
        this.setState({
            inputValue: e.target.value
        })
    }
    handleListDelete(index) {
        console.log('handleListDelete', index)
        const newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
    render() {
        return (
            <div>
            {/*  使用React.Fragment可以替换div标签  */}
            {/*<React.Fragment>*/}
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                <button
                    onClick={this.handleBtnClick}
                    className='todoList-button'
                >add</button>
                {/*<ul>*/}
                {/*    {*/}
                {/*        this.state.list.map((item, index) => {*/}
                {/*            return (*/}
                {/*                <li key={index}>{item}<button onClick={() => this.handleListDelete(index)}>del</button></li>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</ul>*/}
                <TodoItem
                    list={this.state.list}
                    onDeleteClick={this.handleListDelete}
                />
            </div>
        )
    }
}

export default TodoList
