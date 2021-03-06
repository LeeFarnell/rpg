const Pokemon = (props) => {
  // -- PokeDex Data --
  const newDexEntry = [];

  const dexEntry = props.dexData.flavor_text_entries;

  const dexCallback = (dex) => {
    if (dex.language.name === "en") {
      newDexEntry.push(dex.flavor_text);
    }
  };

  dexEntry.map(dexCallback);

  // -- Height/Weight Data --
  const height = props.data.height / 10;
  const weight = props.data.weight / 10;

  // -- Ability Data --

  const abilityCallback = (data) => {
    return <li key={data.ability.name}> {data.ability.name} </li>;
  };

  const abilities = props.data.abilities.map(abilityCallback);

  // -- Type Data --
  const typeCallback = (data) => {
    return <li key={data.type.name}> {data.type.name} </li>;
  };
  const types = props.data.types.map(typeCallback);

  // -- Pokemon Card Data --
  const cardCallback = (data) => {
    if (data) {
      return (
        <div className="col-lg-3 col-md-3 col-sm-12 p-2">
          <a href={data.images.large} target="_blank" rel="noreferrer">
            <img
              id={data.id}
              key={data.id}
              src={data.images.large}
              className="cards"
              alt={data.name}
            ></img>
          </a>
        </div>
      );
    } else if (data === [""]) {
      return (
        <div className="col-3 flex-wrap p-2">
          <h3> No known cards.</h3>
        </div>
      );
    }
  };

  const cards = props.cardData.data.map(cardCallback);

  // -- Render Card --
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
      <div className="row text-center justify-content-center m-0 d-flex">
        <h1 className="card-title p-0">Associated Pokemon Cards</h1>
        {cards}
      </div>
    </div>
  );
};

export default Pokemon;
