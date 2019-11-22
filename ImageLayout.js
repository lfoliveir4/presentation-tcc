import React from 'react'

export default ({ children }) =>
  <div
    style={{
      width: '50vh',
      height: '110vh',
    }}>
    <div
      style={{
        width: '40vh',
        height: '40px',

      }}>
      {children}
    </div>
  </div>