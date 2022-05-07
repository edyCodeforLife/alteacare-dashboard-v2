import React from 'react'

import { Icon } from '@material-ui/core'

type Props = {}

const UserList = (props: Props) => {
  return (
    <table className="w-full text-center border border-t-0">
      <tbody>
        <tr>
          <th className="p-2">Nama</th>
          <th className="p-2">KTP</th>
          <th className="p-2">Tanggal Lahir</th>
          <th></th>
        </tr>
        <tr className="border">
          <td className="p-2">Alfreds Futterkiste</td>
          <td className="p-2">327885747738</td>
          <td className="p-2">07/08/2019</td>
          <td className="p-2">
            <div className="flex flex-row justify-between items-center">
              <button className="btn-primary">Lihat Detail</button>
              <Icon className="text-main-darker">arrow_right</Icon>
            </div>
          </td>
        </tr>
        <tr className="border">
          <td className="p-2">Alfreds Futterkiste</td>
          <td className="p-2">327885747738</td>
          <td className="p-2">07/08/2019</td>
          <td className="p-2">
            <div className="flex flex-row justify-between items-center">
              <button className="btn-primary">Lihat Detail</button>
              <Icon className="text-main-darker">arrow_right</Icon>
            </div>
          </td>
        </tr>
        <tr className="border">
          <td className="p-2">Alfreds Futterkiste</td>
          <td className="p-2">327885747738</td>
          <td className="p-2">07/08/2019</td>
          <td className="p-2">
            <div className="flex flex-row justify-between items-center">
              <button className="btn-primary">Lihat Detail</button>
              <Icon className="text-main-darker">arrow_right</Icon>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default UserList
