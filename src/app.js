import React from 'react';
import ContactsList from './ContactsList.js';

let contacts = {
    name: 'Scott',
    phone: '555 333 5555'
}

class App extends React.Component {
    render() {
        console.log(this.props.contacts);
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts} />
            </div>
        )
    }
}

React.render(<App contacts={contacts} />, document.getElementById('app'));
