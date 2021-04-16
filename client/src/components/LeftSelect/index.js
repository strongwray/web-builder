import React from 'react'
import { connect } from 'react-redux'
import { MODULES_MAP } from '../../modules'
import { getModuleProps, moduleFactory } from '../../modules/factory'
import { mapModuleDispatchToProps } from "../../store/module/module"
import './index.css'

function LeftSelect(props) {

    const createModuleHandle = (name) => {
        const { createModule } = props
        const module = moduleFactory(name)
        createModule(module)
    }

    return (<div className="left-container">
        <p>左侧选择</p>
        {
            Object.keys(MODULES_MAP).map((moduleName, i) => {
                const  { component, name, fields } = MODULES_MAP[moduleName]
                return (<div key={i + name} onClick={() => createModuleHandle(name)}>
                    {
                        React.createElement(component, getModuleProps(fields))
                    }
                </div>)
            })
        }
    </div>)
}


export default connect(null, mapModuleDispatchToProps)(LeftSelect)
