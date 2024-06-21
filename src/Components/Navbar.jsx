import {React} from 'react';
import { Link} from 'react-router-dom';

const Navbar = ({isLoggedIn,logout}) => {
 

  const handleLogout = () => {
      logout();
      // Redirect to home page after logout
  };

    return (
        <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand  " to="/"><h2 className='fw-bolder'>URL Shrinker</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          
        </li>
        {isLoggedIn &&(
          <li className="nav-item">
          <Link className="nav-link active" to="/shortingurl">URL Shorten</Link>
  
          </li>

        )

        }
{isLoggedIn &&(
          <li className="nav-item">
          <Link className="nav-link active" to="/dashboard">Dashboard</Link>
  
          </li>

        )

        }

         {isLoggedIn ?(
          <li className="nav-item">
          <Link className="nav-link active" onClick={handleLogout} >Logout</Link>
  
          </li>

        ):( <li className="nav-item">
          <Link className="nav-link active" to="/login">Login</Link>
  
          </li>)

        }
        {
          !isLoggedIn&&(
            <li className="nav-item">
        <Link className="nav-link active" to="/register">Register</Link>

        </li>
          )
        }
       
        
      </ul>
    </div>
  </div>
</nav>

            
        </div>
    );
};

export default Navbar;