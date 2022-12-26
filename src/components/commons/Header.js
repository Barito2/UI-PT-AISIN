import React from 'react'

const Header = (props) => {
  return (
    <div class="d-flex align-items-start">
      <h5 className='m-auto py-3'>{props.text}</h5>
    </div>
  )
}

export default Header