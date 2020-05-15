import React from 'react'
import './Common.scss';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <div className="header-flex">
          <div className="header-flex-left">
            <div className="header-flex">
              <Link to="/">
                <img className="header-jr2" src={`${process.env.PUBLIC_URL}/jr2.jpg`} alt="jr2" onClick={() => this.props.function()}/>
              </Link>
              <div className="header-find">Find！<br/>東海道！</div>
            </div>
            <img className="header-map" src={`${process.env.PUBLIC_URL}/back2.jpg`} alt="map"/>
          </div>
          <img className="header-fuji" src={`${process.env.PUBLIC_URL}/back1.jpg`} alt="fuji"/>
        </div>
      </header>
    )
  }
}

export default Header;
