import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from 'app/routes'

export default function Home(): JSX.Element {
  return (
    <>
      <Typography variant="h3">Digitization strategies for developing countries</Typography>
      <Typography variant="body1">
        Many developing countries struggle with setting the correct priorities when it comes to developing strategies
        for the deployment of IT. However, as digital systems now permeate all walks of life, expanding and improving
        them are crucial for catching up to developed nations.
      </Typography>
      <Typography variant="body1">
        This platform is aimed at officials and citizens of developing countries that wish to help create a concrete
        strategy plan to improve the situation of their digital infrastructure. It has 3 major sections:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>
          The <Link to={APP_ROUTES.analyses}>analysis section</Link> provides facts about individual countries, which
          help the user to find a country comparable to their own.
        </li>
        <li>
          The <Link to={APP_ROUTES.strategies}>strategy section</Link> allows confirmed country officials to create a
          strategy plan for their country and regular users to view the created strategy plans.
        </li>
        <li>
          The <Link to={APP_ROUTES.discussion}>discussion section</Link> allows everybody to discuss individual measures
          and strategies and how they might be modified to better fit any given country.
        </li>
      </Typography>
      <Typography variant="body1">
        The whole process of the platform is governed by the IT-Boards of the individual countries. The IT-Boards
        consist of several members appointed by law.
      </Typography>
    </>
  )
}
