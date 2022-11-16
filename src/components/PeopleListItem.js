import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');

  console.log("person", person)
  useEffect(() => {
    fetch(person.homeworld)
      .then((res) => res.json())
      .then((planetData) => setHomeworld(planetData.name));
  }, [person]);

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld}</li>
    </ul>
  );
}

export default PeopleListItem;
