import React from 'react';
import { useStore } from 'react-redux';
import { addFragment } from '../../store/page';
import './index.css';

function LeftSelect() {
    const store = useStore();
    // 这里要导入存在的组件
    const existComponentName = ['Text', 'Image'];

    const selectComponent = (name) => {
        store.dispatch(addFragment(name));
    }

    return <div className="left-container">
        <h2>可选择组件</h2>
        {
            existComponentName.map(name => (<div key={name} onClick={() => selectComponent(name)} className="component-item">{ name }组件</div>))
        }
    </div>
}


export default LeftSelect
