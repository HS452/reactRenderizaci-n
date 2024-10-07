const Navbar = () => {
    const total = 25000; // Total fijo por ahora
    const token = false; // Simulación de estado de autenticación
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              🍕 <a className="nav-link" href="#">Home </a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  🔓 <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item">
                  🔒 <a className="nav-link" href="#">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  🔐 <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                  🔐 <a className="nav-link" href="#">Register</a>
                </li>
              </>
            )}
            <li className="nav-item">
              🛒 <a className="nav-link" href="#">Total: ${total.toLocaleString()}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  