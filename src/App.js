
import {useState} from "react";

import Drum from "./components/Drum";


function App() {

	const [sounds, setSounds] = useState([
		{
		  name: "boom",
		  sound: require("./sounds/src_sounds_boom.wav"),
		  key: "A",	
		},
		{
		  name: "clap",
		  sound: require("./sounds/src_sounds_clap.wav"),
		  key: "S",	
		},
	]);

  return (
    <div className="App">
		<h1>React Drumkit</h1>
		{sounds.map((sound, i) => (
		<Drum key={i} letter= {sound.key} sound={sound.sound}/>
		))}
	</div>
  );
}

export default App;
