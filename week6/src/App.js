import React, {Component} from 'react';
import Contacts from './components/Contacts';
import axios from 'axios'


class App extends Component {
    state = {
        contacts: [],
        loading: false
    };

    componentDidMount() {
        axios
        .get("http://jsonplaceholder.typicode.com/users")
            .then(response => response.data)
            .then((data) => {
                this.setState({ contacts: data, loading: true})
            })
            .catch(console.log)

    }

        render() {
        return (
            //<Contacts contacts={this.state.contacts}/>
            this.state.loading ? <Contacts contacts={this.state.contacts}/> : <h3>Loading...</h3>
       
        )
    }
}

export default App;