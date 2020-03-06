import React from 'react'
import { Typography } from '@material-ui/core'
import team from 'assets/team.jpg'

const TheTeam = () => {
  return (
    <div className="theTeam-wrapper" style={{ textAlign: 'center' }}>
      <Typography variant="inherit" color="textPrimary" component="h1">
        The Team
      </Typography>

      <Typography variant="inherit" color="textPrimary" component="p">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint soluta perferendis, ipsam saepe autem.
        Accusantium eveniet animi, unde dolorum temporibus at saepe non officiis explicabo corporis debitis! Ipsa, eum.
      </Typography>

      <div className="team-photo" style={{ position: 'relative', color: 'white', height: '400px' }}>
        <img
          src={team}
          alt="Picture of the team that brought to you disco"
          style={{ opacity: '0.8', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default TheTeam
