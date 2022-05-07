import RequirementForm from '@/components/molecules/change-password/RequirementForm'
import Snackbar from '@/components/molecules/common/Snackbar'
import Button from '@/components/atoms/common/Button'
import Input from '@/components/atoms/common/Input'
import Label from '@/components/atoms/common/Label'
import Title from '@/components/atoms/common/Title'

import useSubmit from './hooks/useSubmit'
import useForm from './hooks/useForm'

const FormChangePassword = () => {
  const { params, validation, handleInput, disableSubmit } = useForm()
  const { snackbar, handleCloseSnackbar, submit } = useSubmit()

  return (
    <div className="pt-16 h-full relative inline-block">
      <div className="px-8 grid gap-y-4" style={{ width: '365px' }}>
        <div className="flex flex-col gap-y-4 mb-5">
          <Title text="Buat Password" classes="text-lg text-dark-1 font-inter" />
          <Label
            text="Password digunakan untuk masuk ke aplikasi"
            classes="text-sm text-dark-1 font-inter"
          />
        </div>
        <form className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-1">
            <Title
              text="Masukkan Password baru"
              classes="text-sm text-dark-1 font-bold font-inter mb-2"
            />
            <Input
              handler={(event) => handleInput('password', event.target.value)}
              classes="w-full text-sm border border-light-1 rounded-md px-5"
              value={params?.password}
              placeholder="Buat Password baru"
              styles={{ height: '52px' }}
              type="password"
            />
            <div>
              <RequirementForm
                validated={validation?.newPasswordLength}
                text="Minimal 8 karakter"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <Title
              text="Masukkan Kembali Password"
              classes="text-sm text-dark-1 font-bold font-inter mb-2"
            />
            <Input
              handler={(event) => handleInput('passwordConfirmation', event.target.value)}
              classes="w-full text-sm border border-light-1 rounded-md px-5"
              value={params?.passwordConfirmation}
              placeholder="Konfirmasi Password baru"
              styles={{ height: '52px' }}
              type="password"
            />
          </div>
          <div>
            <Button
              handler={() => submit(params)}
              classes={`text-white font-bold rounded-lg px-5 py-2 ${disableSubmit ? 'bg-dark-4' : 'bg-main-primary'}`}
              disabled={disableSubmit}
              text="Simpan"
            />
          </div>
        </form>
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
    </div>
  )
}

export default FormChangePassword
