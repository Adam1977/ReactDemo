import React, {Component} from 'react';

class Welcome extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props, this.props.match.params, this.props.location.state)
    }
    render() {
        return (
            <div>
                {/* <h1><a href="/">hello</a></h1> */}
                <h1><button onClick={() => this.props.history.push({pathname: '/'})}>hello</button></h1>
            </div>
        )
    }
}

// function Welcome(props) {
    // return <h1 onClick={props.onButton}>Hello, {props.name}</h1>;
    // return <h1><a href="/">hello</a></h1>
    // return <h1 onClick={() => props.onButton()}>Hello, {props.name}</h1>;
    // return <h1 onClick={() => click(props.name)}>Hello, {props.name}</h1>;
// }
// function click(name) {
//     console.log('click', name)
// }
export default Welcome
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
