import React from 'react'


function Text(props) {
    const { styles, content } = props;
    return <div style={styles}>{ content }</div>
}


export default Text
