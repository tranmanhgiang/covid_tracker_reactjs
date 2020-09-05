import React from 'react';
import ContactComponent from '../../components/ContactComponent/ContactComponent';

class Contact extends React.Component {
    render() {
        return (
            <div className="container-fluid row">
                <ContactComponent/>
            </div>
            
        );
    }
}

export default Contact;