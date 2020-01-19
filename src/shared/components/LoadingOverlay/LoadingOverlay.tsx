import { CircularProgress } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'

export const LoadingOverlay = ({ children }: PropsWithChildren<{}>) => (
  <div className="loading-screen">
    <div className="loading-screen__overlay">
      <div className="loading-screen__spinner">
        <CircularProgress />
      </div>
    </div>
    {children}
  </div>
)
