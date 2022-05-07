import React from 'react'

import { Icon } from '@material-ui/core'

type Props = {}

const Searchbar = (props: Props) => {
  return (
    <div className="relative px-6">
      <button className="absolute text-main-primary" style={{ top: '10px', left: '40px' }}>
        <Icon>search</Icon>
      </button>
      <input
        type="text"
        className="pl-12 w-full h-11 bg-light-3 rounded-full focus:outline-none"
        placeholder="Tulis nama/No.KTP/Tanggal lahir"
      />
    </div>
  )
}

export default Searchbar
