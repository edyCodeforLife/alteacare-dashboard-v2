import React from 'react'

const PatientInformation = () => {
  return (
    <div className="flex py-5 px-4 w-full">
      {/* patient information list */}
      <div className="w-4/6">
        <div className="grid grid-cols-2 text-sm font-thin">
          <div className="flex flex-col gap-y-2">
            <p>Patient ID</p>
            <p>Appointment ID</p>
            <p>Case No</p>
            <p>Appointment Error</p>
            <p>Case Error</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p>: -</p>
            <p>: -</p>
            <p>: -</p>
            <p>: -</p>
            <p>: -</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientInformation
