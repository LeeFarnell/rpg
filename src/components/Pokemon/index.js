const Pokemon = (props) => {
  const newDexEntry = [];

  const dexEntry = props.dexData.flavor_text_entries;

  const dexCallback = (dex) => {
    if (dex.language.name === "en") {
      newDexEntry.push(dex.flavor_text);
    }
  };

  dexEntry.map(dexCallback);

  const height = props.data.height / 10;
  const weight = props.data.weight / 10;

  const abilityCallback = (data) => {
    return <li key={data.ability.name}> {data.ability.name} </li>;
  };

  const abilities = props.data.abilities.map(abilityCallback);

  const typeCallback = (data) => {
    return <li key={data.type.name}> {data.type.name} </li>;
  };
  const types = props.data.types.map(typeCallback);

  return (
    <div className="card">
      <div className="row justify-content-center text-center d-flex m-0">
        <h1 className="card-title p-0">{props.data.name}</h1>
        <div className="col-6 flex-wrap p-0">
          <h2 className="">Default Variant</h2>
          <img
            src={props.data.sprites.front_default}
            alt="..."
            className="image"
          />
        </div>
        <div className="col-6 flex-wrap">
          <h2>Shiny Variant</h2>
          <img
            src={props.data.sprites.front_shiny}
            className="image"
            alt="..."
          />
        </div>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item capital">
          National Dex Number: {props.data.id}
        </li>
        <li className="list-group-item capitalize">
          {props.dexData.generation.name}
        </li>
        <li className="list-group-item">
          Dex Entry: <ul> {newDexEntry[0]} </ul>
        </li>
        <li className="list-group-item capital">
          Type(s): <ul>{types}</ul>
        </li>
        <li className="list-group-item capital">
          Abilities: <ul>{abilities}</ul>
        </li>
        <li className="list-group-item capital">Height: {height} meters</li>
        <li className="list-group-item capital">Weight: {weight}kg</li>
      </ul>
    </div>
  );
};

export default Pokemon;
