const Home = (props) => {
  const onSubmit = async (event) => {
    event.preventDefault();

    console.log("click");
  };

  return (
    <div>
      <h1>Poke Finder!</h1>
      <p>
        Welcome to to Poke Finder! Enter a Pokemon Name for some fascinating
        facts!
      </p>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form onSubmit={onSubmit} className="d-flex w-75">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Home;
