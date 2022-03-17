import { useState, useEffect } from 'react'

const Toaster = () => {
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsShow(false), 4000)
  })


  const handleClose = (e) => {
    e.preventDefault()
    setIsShow(false)
  }

  
  return (
    <div className={isShow ? 'showToaster' : 'hideToaster'}>
      <p className="closeBtn" onClick={handleClose}>close</p>

      <h4>Toast Message...</h4>
    </div>
  )
}

export default Toaster