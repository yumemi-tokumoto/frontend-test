import React, { useState } from 'react'
import { NextPage } from 'next'
import { TextField } from 'src/components/input/TextField'

const HomePage: NextPage = () => {
  const [familyName, setFamilyName] = useState('')
  const [givenName, setGivenName] = useState('')

  return (
    <>
      <h1>サンプルページ</h1>
      <label>
        <span>姓</span>
        <TextField
          name="familyName"
          value={familyName}
          onChange={(ev) => setFamilyName(ev.target.value)}
        />
      </label>
      <label>
        <span>名</span>
        <TextField
          name="givenName"
          value={givenName}
          onChange={(ev) => setGivenName(ev.target.value)}
        />
      </label>
    </>
  )
}

export default HomePage
