import React from 'react'

type Props = {}

const OrderID = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-5 py-2 px-4 bg-light-3">
      {/* order ID section */}
      <div className="flex flex-row justify-between items-center">
        <p className=" text-dark-2">Order ID : 66870080</p>
        <div className="flex flex-row gap-x-5">
          <button className="text-sm text-error-1 border-b border-error-1">Batal</button>
          <span className="p-1 px-2 text-xs text-white bg-dark-3 rounded">Menunggu Pembayaran</span>
        </div>
      </div>
    </div>
  )
}

export default OrderID
