import React from 'react'

import { Icon } from '@material-ui/core'

interface Props {
  text: string
  router: any
}

const ButtonBack = (props: Props) => {
  const { text, router } = props

  return (
    <button className="flex flex-row text-info-1 cursor-pointer" onClick={() => router.back()}>
      <Icon>arrow_back_ios_icon</Icon>
      <p className="font-semibold font-lg">{text}</p>
    </button>
  )
}

ButtonBack.defaultProps = {
  text: '',
  router: null,
}

export default ButtonBack
