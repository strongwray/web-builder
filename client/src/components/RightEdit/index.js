import React from 'react'
import { Form, Button } from 'antd'
import { connect } from "react-redux"
import { mapModuleStateToProps } from "../../store/module/module"
import { MODULES_MAP } from "../../modules"
import {FORM_FIELD_MAP} from "../../core/form/constant"
import './index.css'

function RightEdit(props) {
    const { curModule } = props
    const [form] = Form.useForm()

    if (!curModule) {
        return <div className="right-edit-container">编辑部分</div>
    }

    const editFields = MODULES_MAP[curModule.name].fields

    const onValuesChange = (value, values) => {
        curModule.setFieldsValue(values)
    }

    form.setFieldsValue(editFields.reduce((res, cur) => {
        res[cur.name] = cur.value
        return res
    }, {}))

    return <div className="right-edit-container">
        <Form form={form} name="dynamic_rule" onValuesChange={onValuesChange}>
            {
                editFields.map(f => {
                 const FieldComponent = FORM_FIELD_MAP[f.type]
                 return <Form.Item key={`${f.name}${f.label}`} label={f.label} name={f.name}>
                     { React.createElement(FieldComponent, {  placeholder: f.label }) }
                </Form.Item>
                })
            }
            <Button type="primary">保存</Button>
        </Form>
    </div>
}


export default connect(mapModuleStateToProps)(RightEdit)
