import React, { useState } from 'react'
import { NextPage } from 'next'
import { PageProps } from 'src/types'
import { TextField } from 'src/components/input/TextField'

const HomePage: NextPage<PageProps> = () => {
  const [familyName, setFamilyName] = useState('')
  const [givenName, setGivenName] = useState('')

  return (
    <>
      <h1>サンプルページ</h1>
      <label>
        <span>姓</span>
        <TextField
          value={familyName}
          onChange={(ev) => setFamilyName(ev.target.value)}
        />
        <span>名</span>
        <TextField
          value={givenName}
          onChange={(ev) => setGivenName(ev.target.value)}
        />
      </label>
      
    </>
  )
}

export default HomePage
