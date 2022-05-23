import {useEffect, useState} from "react";


function Drum(props) {

    const [playing, setPalying] = useState(false);

    const play = () => {

        setPalying(true);

        new Audio(props.sound).play();

        setTimeout(() => {
            setPalying(false);
        }, 150);

    };

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === props.letter.toLowerCase()) {
                play();
            }
        });
    }, []);

  return (
    <div className={`drum ${ playing ? "playing" : "" }`} onClick={play}>
        <div className="key">{props.letter}</div>
    </div>
  )
}

export default Drum