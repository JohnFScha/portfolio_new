import React from 'react'
import CV from '../../Assets/CV.pdf'
import { BiDownload } from 'react-icons/bi'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV <BiDownload /></a>
    </div>
  )
}

export default CTA