import React from 'react'

import { Icon } from '@material-ui/core'

type Props = {}

const Searchbar = (props: Props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      {/* searchbar */}
      <div className="relative mx-3 w-full">
        <button className="absolute text-main-primary" style={{ top: '10px', left: '40px' }}>
          <Icon>search</Icon>
        </button>
        <input
          type="text"
          className="pl-12 w-full h-11 bg-light-3 rounded-full focus:outline-none"
        />
      </div>
      {/* filter button */}
      <button className="mx-6 text-main-primary">
        <Icon>filter_alt</Icon>
      </button>
    </div>
  )
}

export default Searchbar
