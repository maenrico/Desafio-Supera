import React, {Component} from 'react';
import css from './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    return (
        <div>
            <nav className = "navbar navbar-light bg-primary">
              <p className="texto" > Extrato </p>
            </nav>
 
        </div>
    );
  }
}

export default NavBar;