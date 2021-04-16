import React from 'react'
import { Form, Input } from 'antd'
import { connect } from "react-redux"
import { mapModuleStateToProps } from "../../store/module/module"
import './index.css'

function RightEdit(props) {
    const { curModule } = props
    const [form] = Form.useForm()

    const onFieldsChange = (changedFields, allFields) => {
        console.log(changedFields)
    }

    return (<div className="right-edit-container">
        { curModule && <Form form={form} name="dynamic_rule" onFieldsChange={onFieldsChange}>
            {
                <div>编辑部分</div>
                // curModule.props.fields.map(field => {
                // return <Form.Item key={`${field.name}${field.label}`} label={field.label} name={field.name}>
                //     { field.type === 'input' && <Input value={field.value} /> }
                // </Form.Item>
                // })
            }
        </Form> }
    </div>)
}


export default connect(mapModuleStateToProps)(RightEdit)
