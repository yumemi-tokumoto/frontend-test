import React, { useState, useCallback } from 'react'
import { NextPage } from 'next'
import {
  TextField,
  Props as TextFieldProps,
} from 'src/components/input/TextField'

const HomePage: NextPage = () => {
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
          name="familyName"
          value={familyName}
          onChange={onChangeFamilyName}
        />
      </label>
      <label>
        <span>名</span>
        <TextField
          name="givenName"
          value={givenName}
          onChange={onChangeGivenName}
        />
      </label>
    </>
  )
}

export default HomePage
