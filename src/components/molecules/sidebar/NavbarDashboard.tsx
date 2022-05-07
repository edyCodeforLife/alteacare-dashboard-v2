import { useRouter } from 'next/router'

import ButtonNavigation from '@/components/atoms/navbar/ButtonNavigation'

const NavbarDashboard = () => {
  const pathName = useRouter().pathname

  return (
    <div className="w-sidebarDashboard bg-info-1">
      <div className="flex flex-col">
        <ButtonNavigation
          text="Panggilan"
          icon="headset_mic"
          path="call"
          isActive={pathName === '/dashboard/call'}
        />
        <ButtonNavigation
          text="Janji Konsultasi"
          icon="assignment"
          path="consultation"
          isActive={pathName === '/dashboard/consultation'}
        />
        <ButtonNavigation
          text="Data Pasien"
          icon="group"
          path="patient"
          isActive={pathName === '/dashboard/patient'}
        />
      </div>
    </div>
  )
}

export default NavbarDashboard
