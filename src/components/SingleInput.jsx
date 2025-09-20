import '../styles/SingleInput.css'

export default function SingleInput({placeholder, icon, action}) {
  return (
    <div className="input">
      <form action={action}>
        <input type="text" placeholder={placeholder} />
        <button type='submit'>{icon}</button>
      </form>
    </div>
  )
}