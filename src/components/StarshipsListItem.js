import { useEffect, useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  console.log({ starship });

  useEffect (() => {
    fetch(starship.name[0])
    .then((res) => res.json())
    .then((pilotData) => {
      console.log(pilotData)
    })
  }, [starship])
  return <li>{starship.name} - First Pilot {firstPilot}</li>;
}

export default StarshipsListItem;
