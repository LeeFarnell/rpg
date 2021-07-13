const Pokemon = (props) => {
  const height = props.data.height / 10;
  const weight = props.data.weight / 10;

  const abilityCallback = (data) => {
    return <li> {data.ability.name} </li>;
  };

  const abilities = props.data.abilities.map(abilityCallback);

  const typeCallback = (data) => {
    return <li> {data.type.name} </li>;
  };
  const types = props.data.types.map(typeCallback);

  return (
    <div className="card">
      <div className="row p-3 justify-content-center text-center">
        <h1 className="card-title">{props.data.name}</h1>
        <div className="col-6">
          <h2>Default Variant </h2>
          <img
            src={props.data.sprites.front_default}
            alt="..."
            className="w-25"
          />
        </div>
        <div className="col-6">
          <h2>Shiny Variant</h2>
          <img
            src={props.data.sprites.front_shiny}
            className="w-25"
            alt="..."
          />
        </div>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          National Dex Number: {props.data.id}
        </li>
        <li className="list-group-item">
          Type(s): <ul>{types}</ul>
        </li>
        <li className="list-group-item">
          Abilities: <ul>{abilities}</ul>
        </li>
        <li className="list-group-item">Height: {height} meters</li>
        <li className="list-group-item">Weight: {weight}kg</li>
      </ul>
    </div>
  );
};

export default Pokemon;
