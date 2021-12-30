import './index.css'

const ActiveEventRegistrationDetails = props => {
  console.log(props)
  const {img, altname} = props
  return (
    <div>
      <img src={img} alt={altname} className="pic" />
    </div>
  )
}

export default ActiveEventRegistrationDetails
