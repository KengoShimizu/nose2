import React from 'react'
import './Confirm.scss';
import { Link } from 'react-router-dom'
import Header from '../common/Header';

class Confirm extends React.Component {
  render(){
    return (
      <div className="confirm">
        <Header function={() => {}}/>
        <div className="table-confirm">
          <div className="flex blue1">
            <div className="flex-left"></div>
            <div>三保の松原</div>
          </div>
          <div className="flex blue1">
            <div className="flex-left">10:37</div>
            <div>ひかり500号東京行</div>
            <div>下車</div>
            <div>1045円</div>
          </div>
          <div className="flex orange1">
            <div className="flex-left">10:42</div>
            <div>静岡(1・2番ホーム)</div>
          </div>
          <div className="flex orange2">
            <div className="flex-left">↓</div>
            <div>JR東海道本線　興津行</div>
            <div>240円</div>
          </div>
          <div className="flex orange1">
            <div className="flex-left">10:53</div>
            <div>清水</div>
          </div>
          <div className="flex blue2">
            <div className="flex-left">10:57</div>
            <div>清水駅前</div>
          </div>
          <div className="flex blue3">
            <div className="flex-left">↓</div>
            <div className="small">しずてつジャストライン 三保山の手<br/>世界遺産三保松原 神の道入口行</div>
            <div>370円</div>
          </div>
          <div className="flex blue2">
            <div className="flex-left">11:24</div>
            <div>世界遺産三保松原 神の道入口</div>
          </div>
          <div className="flex saikabu">
            <div className="pink1 tyuuou">所要時間</div>
            <div className="pink2 tyuuou">47分</div>
            <div className="pink1 tyuuou">料金</div>
            <div className="pink2 tyuuou">1655円</div>
            <div>
              <div className="pink1 tyuuou">乗換</div>
              <div className="pink2 tyuuou">2回</div>
            </div>
          </div>
        </div>
        <Link to="/payment" className="anchor"><div className="finish">チケットを購入</div></Link>
      </div>
    )
  }
}

export default Confirm;
