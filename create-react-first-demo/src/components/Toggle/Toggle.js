import React from 'react'

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

class TestInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        console.log(11, this.inputValue.value)
        this.props.onTestInputSubmit(this.inputValue.value)
        this.inputValue.value = ''
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref={(eventValue) => (this.inputValue = eventValue)}
                />
            </form>
        )
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    onSubmit(value) {
        console.log('value---', value)
    }

    render() {
        const numbers = [1,2,3,3,4,5]
        // const listItems = numbers.map((number,index) =>
        //     <li key={index}>{number * 2}</li>
        // )
        return (
            <div>
                <TestInput
                    onTestInputSubmit={this.onSubmit}
                />
                <SplitPane
                    left={
                        <h1>111</h1>
                    }
                />
                <ul>
                    {/*{listItems}*/}
                    {
                        numbers.map((number,index) =>
                            <li key={index}>{number * 2}</li>
                        )
                    }
                </ul>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle
