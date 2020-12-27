import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Message';

// const Message = ({text}) => <span>{text}</span>;

export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    };

    render() {
        return <div style={{...styles.message, alignSelf: this.props.author === 'robot' ? 'flex-start' : 'flex-end'}}>
            <div>{this.props.message}</div>
            <div style={styles.author}>{this.props.author}</div>
        </div>;
    }
}