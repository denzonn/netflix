export default function Checkbox({
  className = '',
  checked = false,
  ...props
}) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        'rounded border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 ' +
        className
      }
      defaultChecked={checked}
    />
  )
}
