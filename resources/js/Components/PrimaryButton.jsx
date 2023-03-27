import React from 'react'
import PropTypes from 'prop-types'

PrimaryButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'light-outline',
    'white-outline',
  ]),
  children: PropTypes.node,
  processing: PropTypes.bool,
}

export default function PrimaryButton({
  className = '',
  variant = 'primary',
  children,
  processing,
  ...props
}) {
  return (
    <button
      {...props}
      className={`rounded-2xl py-[13px] text-center w-full ${
        processing && 'opacity-30'
      } btn-${variant} ${className}`}
      disable={processing}
    >
      {children}
    </button>
  )
}
