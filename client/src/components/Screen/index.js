import React from 'react'
import { connect } from 'react-redux'
import { mapModuleStateToProps, mapModuleDispatchToProps } from '../../store/module/module'
import './index.css'

function Screen(props) {
    const { selectModule, curModule, moduleList } = props
    return (<div className="screen-container">
            <div className="screen-inner" >
                <h3>中控屏幕</h3>
                {
                    moduleList && moduleList.map((module, i) => {
                        return React.createElement('div', {
                            className: curModule === module ? 'active' : '' ,
                            key: i, onClick: () => {
                                selectModule(module)
                            }
                        }, module.element)
                    })
                }
            </div>
        </div>)
}


export default connect(mapModuleStateToProps, mapModuleDispatchToProps)(Screen)
