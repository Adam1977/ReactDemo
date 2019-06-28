import React, {Component} from 'react';
import './App.css';

let hello = 'welcome react',
    name = {firstname: 'sgl', lastname: 'adam'};

const list = [
    {
        title: 'React111',
        url: 'https: //.....',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectId: 0,
    },
    {
        title: 'Redux',
        url: 'https: //.....',
        author: 'dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectId: 1,
    }
]

// function App() {
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list,
            searchTerm: '',
        };
        this.onDismiss = this.onDismiss.bind(this)
        this.onTest = this.onTest.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.isSearched = this.isSearched.bind(this)
    }
    onDismiss(id) {
        const updateList = this.state.list.filter(item => {
            return item.objectId !== id
        });
        console.log(updateList)
        this.setState({list: updateList});
    }
    onTest() {
        console.log('onTest')
    }
    onSearchChange(event) {
        this.setState({searchTerm: event.target.value})
    }
    isSearched(searchTerm) {
        return function(item) {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
    }
    render() {
        const {list, searchTerm} = this.state
        return (
            <div className="App">
                <h2>{hello}</h2>
                <p>{name.firstname + " " + name.lastname}</p>
                <div>
                    <Search
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    />
                    <Table
                        list={list}
                        isSearched={this.isSearched}
                        pattern={searchTerm}
                        onDismiss={this.onDismiss}
                        onTest={this.onTest}
                    />
                </div>
            </div>
        );
    }
}

// search
class Search extends Component {
    render() {
        const {value, onChange} = this.props;
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                    />
                </form>
            </div>
        );
    }
}

// Table
class Table extends Component {
    render() {
        const {list, isSearched, pattern, onDismiss, onTest} = this.props;
        return (
            <div>
                {list.filter(isSearched(pattern)).map((item, index) => {
                    return (
                        <div key={item.objectId}>
                            <p>
                                <span>{index + 1 + '、'}</span>
                                <span>{item.title + ' '}</span>
                                <span>{item.author + ' '}</span>
                                <span>{item.num_comments + ' '}</span>
                                <span>{item.points + ' '}</span>
                                <span className="App-button">
                                        <button
                                            onClick={() => onDismiss(item.objectId)}
                                            type="button"
                                        >
                                            Dismiss
                                        </button>
                                    </span>
                                <span
                                    onClick={onTest()}
                                />
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default App;
