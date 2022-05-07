import { Icon } from '@material-ui/core'

import Snackbar from '@/components/molecules/common/Snackbar'
import Button from '@/components/atoms/common/Button'
import Title from '@/components/atoms/common/Title'
import Label from '@/components/atoms/common/Label'
import Input from '@/components/atoms/common/Input'

import useForm from './hooks/useForm'
import useCheckPass from './hooks/useCheckPass'

const FormVerifyPassword = () => {
  const { snackbar, submitCheckPassword, handleCloseSnackbar } = useCheckPass()
  const {
    params,
    handleInput,
    disableSubmit,
    typeCurrentPassword,
    handleTypeCurrentPass,
  } = useForm()

  return (
    <div className="pt-16 h-full relative inline-block">
      <div className="px-8 grid gap-y-4" style={{ width: '365px' }}>
        <div className="grid gap-y-4">
          <Title text="Ubah Password" classes="text-lg text-dark-1 font-inter" />
          <Label text="Masukkan password untuk membuat password baru" classes="text-sm text-dark-1 font-inter" />
        </div>
        <form className="grid gap-y-8">
          <div className="relative flex items-center">
            <Input
              classes="w-full text-sm border border-light-1 rounded-md pl-5 pr-10"
              handler={(event) => handleInput('password', event.target.value)}
              placeholder="Masukkan password"
              styles={{ height: '52px' }}
              type={typeCurrentPassword}
              value={params?.password}
            />
            <button
              className="absolute right-0 mr-2.5 flex items-center text-dark-4"
              onClick={() => handleTypeCurrentPass()}
              type="button"
            >
              {
                typeCurrentPassword === 'password'
                  ? <Icon>visibility_off</Icon>
                  : <Icon>visibility_on</Icon>
              }
            </button>
          </div>
          <div>
            <Button
              classes={`text-white font-bold rounded-lg px-5 py-2 ${disableSubmit ? 'bg-dark-4' : 'bg-main-primary'}`}
              handler={() => submitCheckPassword(params?.password)}
              text="Buat password baru"
              disabled={disableSubmit}
            />
          </div>
        </form>
      </div>
      <div className="w-full absolute bottom-0">
        {
          !Object.values(snackbar).includes('') && (
            <Snackbar
              text={snackbar?.text}
              type={snackbar?.type}
              bgColor={snackbar?.bgColor}
              handleClose={() => handleCloseSnackbar()}
            />
          )
        }
      </div>
    </div>
  )
}

export default FormVerifyPassword