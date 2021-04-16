import { Input } from 'antd'

const TextArea = Input.TextArea

export const FORM_INPUT_TYPE = 'input'
export const FORM_TEXTAREA_TYPE = 'textarea'

export const FORM_FIELD_MAP = {
    [FORM_INPUT_TYPE]: Input,
    [FORM_TEXTAREA_TYPE]: TextArea
}
