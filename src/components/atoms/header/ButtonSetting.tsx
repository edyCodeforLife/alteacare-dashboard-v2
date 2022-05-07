import React, { ReactNode } from 'react'

import Link from 'next/link'

interface Props {
  icon: ReactNode
  disabled?: boolean
}

const ButtonSetting = (props: Props) => {
  const { icon, disabled } = props

  return (
    <div className="group relative">
      <button
        className="flex justify-center items-center p-2 text-main-darker hover:bg-main-lighter rounded-full"
        disabled={disabled}
        type="button"
      >
        {icon}
      </button>
      {/* hovered block section */}
      <div className="hidden group-hover:block absolute top-10 right-0 z-10 bg-white">
        <div className="p-4 w-52 text-sm rounded-lg border border-solid shadow">
          <div className="flex flex-col gap-y-4 text-info-2">
            <p className="font-semibold">Pengaturan</p>
            <Link passHref={true} href={'/manage-user/change-password'}>
              <div className="py-2 w-full hover:bg-main-subtle cursor-pointer">Ubah Password</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

ButtonSetting.defaultProps = {
  disabled: false,
}

export default ButtonSetting
