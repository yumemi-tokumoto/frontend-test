import React from 'react'

// types
export type Props = JSX.IntrinsicElements['input']

export const TextField: React.FC<Props> = React.memo((props) => {
  console.log('TextFieldレンダー')
  return <input {...props} />
})

TextField.displayName = 'TextField'
