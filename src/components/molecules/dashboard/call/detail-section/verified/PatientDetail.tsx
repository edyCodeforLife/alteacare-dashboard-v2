import React from 'react'

type Props = {}

const PatientDetail = (props: Props) => {
  return (
    <div className="flex py-5 px-4 w-full">
      {/* patient data list */}
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
    </div>
  )
}

export default PatientDetail
