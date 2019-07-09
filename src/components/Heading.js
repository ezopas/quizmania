import React from 'react';

class Heading extends React.PureComponent {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

export default Heading;