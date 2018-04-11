import React, {PropTypes} from 'react'

const MarkdownEditorHeader = ({ isSaving }) => (
  <header className='editor-header'>
    <p className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  </header>
)

MarkdownEditorHeader.PropTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownEditorHeader
