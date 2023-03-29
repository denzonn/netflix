import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

//Proptypes sendiri fungsi sebagai validasi inputan

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
  autoComplete: PropTypes.string,
  required: PropTypes.bool,
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
}

export default function TextInput({
  type = 'text',
  name,
  value,
  defaultValue,
  className = '',
  variant = 'primary',
  autoComplete,
  isFocused,
  onChange,
  placeholder,
  isError,
  required,
}) {
  const inputRef = useRef()

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        ref={inputRef}
        className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
          isError && 'input-error'
        } input-${variant} ${className}`}
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
