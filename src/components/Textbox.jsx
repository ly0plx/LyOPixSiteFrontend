import '../styles/Textbox.css'

export default function Textbox({ id, type = 'text', as, multiline, placeholder = '', value, onChange, ...rest }) {
  // Determine whether to render an input or textarea
  const wantTextarea = as === 'textarea' || multiline === true || type === 'textarea'
  const isControlled = value !== undefined

  return (
    <div className="input-group">
      {wantTextarea ? (
        <textarea
          id={id}
          placeholder=" "
          onChange={onChange}
          {...rest}
          {...(isControlled ? { value } : {})}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder=" "
          onChange={onChange}
          {...rest}
          {...(isControlled ? { value } : {})}
        />
      )}
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
}