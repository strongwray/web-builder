import React from 'react'
import { connect } from 'react-redux'
import moduleList from '../../modules'
import { ADD_MODULE } from "../../store/module/module"
import './index.css'

function LeftSelect(props) {
    const { addModuleAction } = props

    const addBaseModule = (module) => {
        const { component, ...resConfig } = module
        addModuleAction(React.createElement(component, { ...resConfig }))
    }

    return (<div className="left-container">
        <p>左侧选择</p>
        {
            moduleList.map((module, index) => {
            const { component, ...resConfig } = module
            return (<div draggable={true} key={index} onClick={() => addBaseModule(module)}>
                { React.createElement(component, { ...resConfig }) }
            </div>)
            })
        }
    </div>)
}

const mapDispatchToProps = (dispatch) => {
    return {
        addModuleAction (module) {
            dispatch({ type: ADD_MODULE, payload: module })
        }
    }
}

export default connect(null, mapDispatchToProps)(LeftSelect)
