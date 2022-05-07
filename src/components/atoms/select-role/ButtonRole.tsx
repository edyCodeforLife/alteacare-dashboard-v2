import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props {
  imageUrl: string
  text: string
  userRole: string
}

const ButtonRole = (props: Props) => {
  const { imageUrl, text, userRole } = props
  const route = useRouter()

  const handleRole = () => {
    route.push({ pathname: '/authentication/login', query: { role: userRole } })
  }

  return (
    <div className="flex flex-col gap-y-3 items-center cursor-pointer">
      <button onClick={handleRole} className="btn-role" type="button">
        {imageUrl && <Image alt="button" src={imageUrl} width={43} height={55} layout="fixed" />}
      </button>
      <p className="text-sm text-dark-3">{text}</p>
    </div>
  )
}

export default ButtonRole
