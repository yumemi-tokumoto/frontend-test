import React, { useState, useCallback } from 'react'
import { NextPage } from 'next'
import { PageProps } from 'src/types'
import {
  TextField,
  Props as TextFieldProps,
} from 'src/components/input/TextField'

const HomePage: NextPage<PageProps> = () => {
  const [familyName, setFamilyName] = useState('')
  const [givenName, setGivenName] = useState('')

  const onChangeFamilyName: TextFieldProps['onChange'] = useCallback(
    (ev) => setFamilyName(ev.target.value),
    [],
  )
  const onChangeGivenName: TextFieldProps['onChange'] = useCallback(
    (ev) => setGivenName(ev.target.value),
    [],
  )

  return (
    <>
      <h1>サンプルページ</h1>
      <label>
        <span>姓</span>
        <TextField
          value={familyName}
          onChange={onChangeFamilyName}
        />
        <span>名</span>
        <TextField
          value={givenName}
          onChange={onChangeGivenName}
        />
      </label>
      
    </>
  )
}

export default HomePage
