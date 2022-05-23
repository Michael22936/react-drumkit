
function Drum(props) {

const play = () => {
    new Audio(props.sound).play();
}

  return (
    <div className="drum" onClick={play}>
        <div className="key">{props.letter}</div>
    </div>
  )
}

export default Drum