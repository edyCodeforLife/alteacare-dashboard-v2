import { useRouter } from 'next/router'

import Label from '@/components/atoms/common/Label'
import Title from '@/components/atoms/common/Title'
import ButtonRole from '@/components/atoms/select-role/ButtonRole'
import userRoles from '@/constants/Roles'

const MenuSelectRole = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-y-8 py-16">
      <div className="flex flex-col gap-y-4 px-8">
        <Title
          text="Halo, Silahkan masuk sesuai dengan role Anda"
          classes="text-center text-sm text-main-darker font-medium"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="text-sm text-center text-dark-2">
          <Label text="Pilih salah satu untuk masuk ke" />
          <br />
          <Label text="Alteacare consultation dashboard" />
        </p>
        <div className="grid grid-cols-3 text-red">
          <ButtonRole
            imageUrl={`${router.basePath}/assets/images/login-page/MA-icon.png`}
            text="Medical Advisor (MA)"
            userRole={userRoles[1].code}
          />
          <ButtonRole
            imageUrl={`${router.basePath}/assets/images/login-page/PRO-icon.png`}
            text="Patient Relation Officer (PRO)"
            userRole={userRoles[2].code}
          />
          <ButtonRole
            imageUrl={`${router.basePath}/assets/images/login-page/SP-icon.png`}
            text="Dokter Telekonsultasi"
            userRole={userRoles[3].code}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuSelectRole
