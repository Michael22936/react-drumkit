
function Drum(props) {

const play = () => {
    new Audio(props.sound).play();
}

  return (
    <div className="drum">
        <div className="key" onClick={play}>{props.letter}</div>
    </div>
  )
}

export default Drum