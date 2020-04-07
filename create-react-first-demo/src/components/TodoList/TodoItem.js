import React from 'react'

// function TodoItem(props) {
//     return (
//         <ul>
//             {
//                 props.list.map((item, index) => {
//                     return (
//                         <li key={index}>{item}<button onClick={() => props.onDeleteClick(index)}>del</button></li>
//                     )
//                 })
//             }
//         </ul>
//     )
// }

class TodoItem extends React.Component {
    render() {
        const { list, onDeleteClick } = this.props
        return (
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>{item}<button onClick={() => onDeleteClick(index)}>del</button></li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default TodoItem
