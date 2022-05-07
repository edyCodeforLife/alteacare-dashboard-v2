import { useRouter } from 'next/router'

import Button from '@/components/atoms/common/Button'
import Title from '@/components/atoms/common/Title'

const SidebarManageUser = () => {
  const router = useRouter()

  return (
    <div className="py-7 px-8 bg-light-4" style={{ width: '300px' }}>
      <Title
        text="Pengaturan"
        classes="text-xl text-dark-2 tracking-wide font-semibold font-inter"
      />
      <div className="flex flex-col gap-y-3 py-4">
        <Button
          handler={() => router.push('/manage-user/verify-password')}
          classes="text-dark-2 text-lg font-inter font-light text-left"
          text="Ubah Password"
        />
      </div>
    </div>
  )
}

export default SidebarManageUser
