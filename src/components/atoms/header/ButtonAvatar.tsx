import { Icon } from '@material-ui/core'

interface Props {
  text: string
}

const ButtonAvatar = (props: Props) => (
  <div className="group inline-block relative">
    <div className="p-2 hover:bg-main-subtle rounded-full">
      <button className="p-1 px-2 text-xs text-white bg-main-darker rounded-full">
        {props.text}
      </button>
    </div>
    {/* hovered block section */}
    <div className="hidden group-hover:block absolute top-10 right-0 z-10 bg-white">
      <div className="p-4 w-52 text-sm rounded-lg border border-solid shadow">
        <div className="flex flex-row justify-between text-info-2">
          <p className="font-semibold">Keluar</p>
          <Icon fontSize="small">logout</Icon>
        </div>
      </div>
    </div>
  </div>
)

export default ButtonAvatar
