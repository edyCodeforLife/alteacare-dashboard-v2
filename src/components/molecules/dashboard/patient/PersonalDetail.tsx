import React from 'react'

import Image from 'next/image'

type Props = {}

const Detail = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-3 py-5 px-4 w-full">
      <div className="flex flex-row justify-between">
        <p className="font-bold text-dark-2">User ID : AB123456</p>
        <button className="btn-secondary">Ubah Data</button>
      </div>
      <p className="font-bold text-dark-2">Pribadi</p>
      {/* patient detail data */}
      <div className="w-4/6 text-sm font-thin">
        <div className="grid grid-cols-2 ">
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
        <div className="flex flex-col gap-y-3">
          <p>Foto KTP</p>
          <div className="self-center">
            <Image
              alt="ktp-img"
              src="/assets/images/login-page/MA-icon.png"
              layout="fixed"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
