import React from 'react'

import { Icon } from '@material-ui/core'

const FamilyMember = () => {
  return (
    <div className="pb-3 w-full border-b border-light-2">
      {/* button add */}
      <button className="mx-4 mb-5 w-fit font-bold text-main-primary">
        <div className="flex flex-row items-center">
          <Icon fontSize="small">add</Icon>
          <p>Tambah</p>
        </div>
      </button>
      <div className="flex flex-col px-4">
        {/* family member name */}
        <div className="flex flex-row justify-between mb-2">
          <p className="font-bold text-dark-2">Pribadi</p>
          <button className="btn-primary">
            <p>Ubah</p>
          </button>
        </div>
        {/* family member data */}
        <div className="w-4/6">
          <div className="grid grid-cols-2 text-sm font-thin">
            <div className="flex flex-col gap-y-2">
              <p>Nama</p>
              <p>Umur</p>
              <p>Tanggal Lahir</p>
              <p>Kota Lahir</p>
              <p>Jenis Kelamin</p>
              <p>No. Telepon</p>
              <p>Email</p>
              <p>Nomor KTP</p>
              <p>Alamat</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p>: Lukas</p>
              <p>: 26 tahun 3 bulan</p>
              <p>: 11/10/1996</p>
              <p>: Jakarta</p>
              <p>: Laki-laki</p>
              <p>: +6289675664758</p>
              <p>: lukas@alteacare.com</p>
              <p>: 3275564735</p>
              <p>
                : Komp Bukit dago, Blok RT/RW 02/08 kel. Rawa Kalong Kec. Gunung Sindur Kota Bogor
                Jawa barat 12345
              </p>
            </div>
          </div>
        </div>
        {/* checkbox */}
        <div className="flex flex-row gap-x-3 items-center mt-4">
          <input type="checkbox" />
          <p className="text-dark-3">Pilih sebagai pasien</p>
        </div>
      </div>
    </div>
  )
}

export default FamilyMember
