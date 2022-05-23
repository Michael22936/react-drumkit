
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
		{
			name: "hihat",
			sound: require("./sounds/src_sounds_hihat.wav"),
			key: "D",	
		},
		{
			name: "kick",
			sound: require("./sounds/src_sounds_kick.wav"),
			key: "F",	
		},
		{
			name: "openhat",
			sound: require("./sounds/src_sounds_openhat.wav"),
			key: "G",	
		},
		{
			name: "ride",
			sound: require("./sounds/src_sounds_ride.wav"),
			key: "H",	
		},
		{
			name: "snare",
			sound: require("./sounds/src_sounds_snare.wav"),
			key: "J",	
		},
		{
			name: "tink",
			sound: require("./sounds/src_sounds_tink.wav"),
			key: "K",	
		},
		{
			name: "tom",
			sound: require("./sounds/src_sounds_tom.wav"),
			key: "L",	
		},
	]);

  return (
    <div className="App">
		<h1>React Drumkit</h1>
		<div className="drums">
			{sounds.map((sound, i) => (
				< Drum key={i} letter= {sound.key} sound={sound.sound} />
			))}
		</div>
	</div>
  );
}

export default App;
