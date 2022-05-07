import { Icon } from '@material-ui/core'

import Label from '@/components/atoms/common/Label'

interface Props {
  text: string
  validated: boolean
}

const RequirementForm = (props: Props) => (
  <div className={`flex items-start text-sm ${props.validated ? 'text-dark-2' : 'text-dark-4'}`}>
    {
      props.validated
        ? <Icon fontSize="inherit" className="mt-1 mr-2">check</Icon>
        : <Icon fontSize="inherit" className="mt-1 mr-2">close</Icon>
    }
    <Label text={props.text} classes="mt-1" />
  </div>
)

export default RequirementForm
