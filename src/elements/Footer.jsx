import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://ictkerala.org/'>
          AnnResmy@ICT Academy Of Kerala
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer