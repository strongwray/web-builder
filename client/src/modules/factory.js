import React from 'react'
import { MODULES_MAP } from './index'

export const getModuleProps =  (fields) => {
    return fields.reduce((pre, cur) => {
        const { name, value } = cur
        if (!pre.hasOwnProperty(name)) pre[name] = value
        return pre
    }, {})
}

const modulePrototype = {
    emit() {
        console.log('emit')
    },
    on() {
        console.log('on')
    }
}

export const moduleFactory = (name) => {
    const module = MODULES_MAP[name]
    if (module === null) console.warn('没有查找的module')
    const { component, fields } = module
    const moduleInstance = Object.create(modulePrototype)
    moduleInstance.name = name
    moduleInstance.element = React.createElement(component, getModuleProps(fields))

    return moduleInstance
}
