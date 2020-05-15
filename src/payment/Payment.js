import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../common/Header';
import './Payment.scss';

class Payment extends React.Component {
  render(){
    return (
      <div className="payment">
        <Header function={() => {}}/>
        <div className="payment-wrap">
          <div className="payment-cre">
            <input type="radio" name="hoge" className="radio"/>
            <div className="bold">クレジットカード</div>
            <img className="visa" src={`${process.env.PUBLIC_URL}/visa.jpg`} alt="visa"/>
            <img className="master-card" src={`${process.env.PUBLIC_URL}/master.jpg`} alt="master card"/>
            <img className="jcb" src={`${process.env.PUBLIC_URL}/jcb.jpg`} alt="jcb"/>
          </div>
          <div className="payment-cre-detail">
            <input type="text" placeholder="カード番号"/>
            <input type="text" placeholder="カード所有者の名前"/>
            <input type="text" placeholder="月/年"/>
            <input type="text" placeholder="CVV"/>
          </div>
          <div className="payment-conv">
            <input type="radio" name="hoge" className="radio"/>
            <div className="bold">コンビニ/その他</div>
          </div>
          <div className="payment-conv-list">
            <img className="seven" src={`${process.env.PUBLIC_URL}/seven.jpg`} alt="seven"/>
            <img className="roson" src={`${process.env.PUBLIC_URL}/roson.jpg`} alt="roson"/>
            <img className="fami" src={`${process.env.PUBLIC_URL}/fami.jpg`} alt="fami"/>
          </div>
          <div className="payment-huri">
            <input type="radio" name="hoge" className="radio"/>
            <div className="bold">銀行振り込み</div>
          </div>
        </div>
        <Link to="/finish" className="anchor"><div className="finish">支払いへ進む▶︎</div></Link>
      </div>
    )
  }
}

export default Payment;
