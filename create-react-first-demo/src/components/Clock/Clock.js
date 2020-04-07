import React from 'react'

// function Clock(props) {
//     return (
//         <div>
//             <h1>hello</h1>
//             <h2>It is {props.data.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Date(),
            status: 1
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.timerID = setInterval(() => {
            this.loop()
        }, 1000)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerID)
    }

    loop() {
        this.setState(state => ({
            data: new Date(),
            status: ++state.status
        }))
        console.log('11',this.state.status)
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
                {/*<h2>It is {this.props.data.toLocaleTimeString()}</h2>*/}
                <h2>It is {this.state.data.toLocaleTimeString()}</h2>
                <h3>{this.state.status}</h3>
            </div>
        )
    }
}

export default Clock
