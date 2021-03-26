import React from 'react'
import { connect } from 'react-redux'
import './index.css'
import { SELECT_MODULE, STORE_MODULE_SPACE } from "../../store/module/module"

function Screen(props) {
    const { selectModuleAction, curModuleComponent, moduleComponentList } = props
    return (<div className="screen-container">
            <div className="screen-inner" >
                <h3>中控屏幕</h3>
                {
                    moduleComponentList && moduleComponentList.map((moduleComponent, i) => {
                        return React.createElement('div', {
                            className: curModuleComponent === moduleComponent ? 'active' : '' ,
                            key: i, onClick: () => {
                                selectModuleAction(moduleComponent)
                            }
                        }, moduleComponent)
                    })
                }
            </div>
        </div>)
}

const mapStateToProps = (state) => {
    const { curModuleComponent, moduleComponentList } = state[STORE_MODULE_SPACE]
    return { curModuleComponent, moduleComponentList }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectModuleAction(module) {
            dispatch({ type: SELECT_MODULE, payload: module })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen)
