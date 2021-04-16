import React from 'react'
import { FORM_INPUT_TYPE, FORM_TEXTAREA_TYPE } from "../../core/form/constant"
import './index.css'

// render section
export function Comment({ title, content }) {
    return (<div className="content-module" >
        <h3>{ title }</h3>
        <p>{ content }</p>
    </div>)
}

// edit section
export const formField = [
    {
        type: FORM_INPUT_TYPE,
        label: '标题',
        name: 'title',
        value: '请输入标题',
        example: '这里的标题牛逼'
    },
    { type: FORM_TEXTAREA_TYPE,
        label: '内容',
        name: 'content',
        value: '请输入内容',
        example: '这里的标题牛逼'
    }
]

