import React from 'react';

class ContactsList extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.contacts.name} {this.props.contacts.phone}</li>
            </ul>
        )
    }
}

export default ContactsList;
