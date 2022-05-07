import { useEffect, useState } from 'react'

const useCall = () => {
  const [activeTab, setActiveTab] = useState<string>('')

  useEffect(() => {
    setActiveTab('call')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Handle active tab on consultation page
   * @param param -> tab name (ex: 'ongoing')
   * @void change active tab
   */
  const handleActiveTab = (param: string) => {
    setActiveTab(param)
  }

  return {
    activeTab,
    handleActiveTab,
  }
}

export default useCall
