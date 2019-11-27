export const OPEN_NAV_BAR = 'skeleton/navbar/open'
export const CLOSE_NAV_BAR = 'skeleton/navbar/close'

interface OpenNavBar {
  type: typeof OPEN_NAV_BAR
}

interface CloseNavBar {
  type: typeof OPEN_NAV_BAR
}

export type SkeletonAction = OpenNavBar | CloseNavBar

export const closeNavBar = (): CloseNavBar => ({
  type: CLOSE_NAV_BAR,
})

export const openNavBar = (): OpenNavBar => ({
  type: OPEN_NAV_BAR,
})
