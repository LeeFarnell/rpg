const Pokemon = (props) => {
  const height = props.data.height / 10;
  const weight = props.data.weight / 10;

  return (
    <div className="card">
      <div className="row p-3 text-center">
        Default Variant
        <img
          src={props.data.sprites.front_default}
          className="col-3"
          alt="..."
        />
        Shiny Variant
        <img src={props.data.sprites.front_shiny} className="col-3" alt="..." />
      </div>

      <div className="card-body">
        <h5 className="card-title">Name: {props.data.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Main Type: {props.data.types[0].type.name}
        </li>
        <li className="list-group-item">
          Main Ability: {props.data.abilities[0].ability.name}
        </li>
        <li className="list-group-item">Height: {height} meters</li>
        <li className="list-group-item">Weight: {weight}kg</li>
      </ul>
    </div>
  );
};

export default Pokemon;
