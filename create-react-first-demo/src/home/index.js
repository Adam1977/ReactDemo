import React from 'react';
import logo from '../logo.svg';
// import HelloName from '../helloDemo/helloName'
// import Clock from './components/Clock/Clock'
import Toggle from '../components/Toggle/Toggle'
import ThemeContext from '../context/theme-context'
import ThemeBar from '../components/ThemeBar'
import TodoList from '../components/TodoList/TodoList'

const themes = {
    light: {
        classNames: 'light',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        classNames: 'dark',
        bgColor: '#222222',
        color: '#fff'
    }
}

// function test() {
//     console.log('onButton')
// }

// function App() {
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
        this.onChangeTheme = this.onChangeTheme.bind(this)
        this.goWelcome = this.goWelcome.bind(this)
    }
    onChangeTheme(theme) {
        this.setState({
            theme
        })
    }
    goWelcome() {
        this.props.history.push({
            pathname: '/welcome/hh',
            state: {
                test: 123
            }
        })
    }
    render() {
        return (
            <div className="App">
                <p><a href="#/welcome/hhh">跳转welcome-链接</a></p>
                <p><button onClick={this.goWelcome}>跳转welcome-函数</button></p>
                <p>TodoList start</p>
                <TodoList />
                <p>TodoList end</p>
                <ThemeContext.Provider value={themes[this.state.theme]}>
                    <div>
                        <button
                            onClick={() => this.onChangeTheme('light')}
                        >浅色主题</button>
                        <button
                            onClick={() => this.onChangeTheme('dark')}
                        >深色主题</button>
                    </div>
                    <ThemeBar/>
                </ThemeContext.Provider>
                <Toggle/>
                {/*<Clock data={new Date()}/>*/}
                {/* <HelloName name="hahaha" onButton={test}/> */}
                {/*<HelloName name="hahaha" onButton={() => test()} />*/}
                {/* <HelloName name="hahaha2"/> */}
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
