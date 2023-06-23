const SocialIcon = (props) => {
  return (
    <a className="inline-block" href={props.link} target="blank"><img src={props.icon} alt="facebook" /></a>
  )
}

export default SocialIcon