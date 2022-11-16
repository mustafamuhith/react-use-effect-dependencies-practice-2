import { useEffect, useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  console.log({ starship });

  useEffect (() => {
    if (starship.pilots.length === 0) {
      setFirstPilot('unknown')
       return
      }

    fetch(starship.pilots[0])
    .then((res) => res.json())
    .then((pilotData) => {
      console.log(pilotData)
      setFirstPilot(pilotData.name)
    })
  }, [starship])
  return <li>{starship.name} - First Pilot {firstPilot}</li>;
}

export default StarshipsListItem;
