const size = {
    xxxs:'330px',
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px'
  }

export const device = {
    xxs:`(max-width: ${size.xxxs})`,
    mobile: `(max-width: ${size.mobile})`,
    tabletS: `(min-width: ${size.mobile})`,
    tabletL: `(max-width: ${size.tablet})`,
    desktopS: `(min-width: ${size.tablet})`,
    desktopL: `(max-width: ${size.desktop})`
  };