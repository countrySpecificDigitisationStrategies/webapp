import React from 'react'
import { Typography } from '@material-ui/core'

const TermsOfUse = () => {
  return (
    <div className="termsOfUse-wrapper" style={{ textAlign: 'center' }}>
      <Typography variant="inherit" color="textPrimary" component="h1">
        Terms of Use
      </Typography>

      <Typography variant="inherit" color="textPrimary" component="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint soluta perferendis, ipsam saepe autem.
        Accusantium eveniet animi, unde dolorum temporibus at saepe non officiis explicabo corporis debitis! Ipsa, eum.
      </Typography>
    </div>
  )
}

export default TermsOfUse
