import { CircularProgress } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'

interface LoadingOverlayProps {
  active: boolean
}

const rootCls = 'loading-screen'
const overlayCls = `${rootCls}__overlay`
const overlayHiddenCls = `${overlayCls}--hidden`
const spinnerCls = `${rootCls}__spinner`

export const LoadingOverlay = ({ children, active }: PropsWithChildren<LoadingOverlayProps>) => (
  <div className={rootCls}>
    <div className={`${overlayCls} ${!active && overlayHiddenCls}`}>
      <div className={spinnerCls}>
        <CircularProgress />
      </div>
    </div>
    {children}
  </div>
)
