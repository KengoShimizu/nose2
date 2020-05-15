import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../common/Header'

const style = {
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'orange',
}

class Finish extends React.Component {
  render(){
    return (
      <div className="confirm">
        <Header function={() => {}}/>
        <div style={style}>購入しました</div>
        <Link to="/" className="anchor"><div className="finish">トップに戻る</div></Link>
      </div>
    )
  }
}

export default Finish
