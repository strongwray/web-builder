import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

function Screen(props) {
    const page = useSelector(s => s.pageR.page);
    
    return (<div className="screen-container">
            <div className="screen-inner" >
                <h3>中控屏幕</h3>
                { page.length > 0 && page.map((f, i) => <div key={i}>{ f }</div>) }
            </div>
        </div>)
}


export default Screen;
