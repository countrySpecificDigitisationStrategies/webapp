export const OPEN_NAV_BAR = 'ui/navbar/open'
export const CLOSE_NAV_BAR = 'ui/navbar/close'

interface OpenNavBar {
  type: typeof OPEN_NAV_BAR
}

interface CloseNavBar {
  type: typeof CLOSE_NAV_BAR
}

export type NavBarActions = OpenNavBar | CloseNavBar

export const closeNavBar = (): CloseNavBar => ({
  type: CLOSE_NAV_BAR,
})

export const openNavBar = (): OpenNavBar => ({
  type: OPEN_NAV_BAR,
})
