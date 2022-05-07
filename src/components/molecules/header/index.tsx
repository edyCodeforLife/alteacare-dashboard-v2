import { Icon } from '@material-ui/core'
import { useRouter } from 'next/router'

import AvatarButton from '@/components/atoms/header/ButtonAvatar'
import ButtonSetting from '@/components/atoms/header/ButtonSetting'

const Header = () => {
  const router = useRouter()

  return (
    <div className="flex z-10 flex-row justify-between items-center py-2.5 px-6 shadow">
      <img
        alt="logo-alteacare"
        src={`${router.basePath}/assets/images/logo-alteacare.png`}
        style={{ maxWidth: '125px' }}
      />
      <div className="flex flex-row gap-x-5 items-center">
        {/* <ButtonIcon icon={<Icon>nostifications</Icon>} /> */}
        <ButtonSetting icon={<Icon fontSize="medium">settings</Icon>} />
        <AvatarButton text="RG" />
      </div>
    </div>
  )
}

export default Header
