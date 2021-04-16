import { Comment, formField }  from './Comment'

export const COMMENT_COMPONENT_NAME = 'comment'

export const MODULES_MAP = {
    [COMMENT_COMPONENT_NAME]: {
        name: COMMENT_COMPONENT_NAME,
        component: Comment,
        fields: formField
    }
}

