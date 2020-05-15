import React from 'react'
import './Top.scss'
import { Link } from 'react-router-dom'
import Header from '../common/Header';

const scroll_obj = [
  {
    label: '目的から探す',
    items: ['sample', '遊ぶ', '食べる', '観る', '泊まる', '季節のおすすめ', 'sample'],
    class: 'purpose'
  },
  {
    label: '駅から探す',
    items: ['sample', '熱海', '三島', '静岡', '浜松', '豊橋', 'sample'],
    class: 'train'
  }
]

const category_obj = [
  {
    item: 'init',
    category: [['','a','']]
  },
  {
    item: '食べる',
    category: [
      [`${process.env.PUBLIC_URL}/unagi.jpg`,'うなぎ','unagi'],
      [`${process.env.PUBLIC_URL}/misokatsu.jpg`,'味噌カツ','misokatu'],
      [`${process.env.PUBLIC_URL}/niku.jpg`,'肉','niku'],
      [`${process.env.PUBLIC_URL}/kaisen.jpg`,'海鮮','kaisen']]
  },
  {
    item: '観る',
    category: [
      [`${process.env.PUBLIC_URL}/shiseki.jpg`,'史跡','siseki'],
      [`${process.env.PUBLIC_URL}/huji.jpg`,'富士山','fujisan'],
      [`${process.env.PUBLIC_URL}/bunka.jpg`,'文化','bunka'],
      [`${process.env.PUBLIC_URL}/shizen.jpg`,'自然','sizen']]
  }
]

const ticket_obj = [
  {
    item: 'init',
    ticket: [['','b','','b']]
  },
  {
    item: 'unagi',
    ticket: [
      [`${process.env.PUBLIC_URL}/aaa.jpg`,'AAA店','小田原','AAA'],
      [`${process.env.PUBLIC_URL}/bbb.jpg`,'BBB店','熱海','BBB']]
  },
  {
    item: 'siseki',
    ticket: [
      [`${process.env.PUBLIC_URL}/odawara.jpg`,'小田原城','小田原','odawara_siseki']
    ]
  }
]

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      scroll: 0,
      isActive: 'init',
      isActiveCategory: 'init',
      isActiveTicket: 'init',
      isActiveTicketCategory: 'init',
    };
  }

  /*
  scrollLeft = () => {
    const scroll = this.state.scroll + 10
    this.setState({scroll: scroll},() => {
      this.scrollRef.current.scrollLeft = this.state.scroll
    })
    console.log(this.scrollRef.current.scrollLeft)
  }

  scrollRight = () => {
    console.log('r')
  }
  */

  //目的から探すナビを押した時のコールバック
  handleActive = (e) => {
    let category = e.currentTarget.innerHTML
    if(category !== '観る' && category !== '食べる'){
      category = 'init'
    }
    let isactive = `${e.currentTarget.id}-true`
    if(category === 'init'){
      isactive = 'init'
    }
    this.setState({
      isActiveCategory: category,
      isActive: isactive
    })
  }

  //特定カテゴリを押した時のコールバック
  handleClickCategory = (e) => {
    let category = e.currentTarget.id
    if(category !== 'siseki' && category !== 'unagi'){
      category = 'init'
    }
    let isactive = `${e.currentTarget.id}-true`
    if(category === 'init'){
      isactive = 'init'
    }
    this.setState({
      isActiveTicketCategory: category,
      isActiveTicket: isactive
    })
  }

  handleinit = () => {
    this.setState({
      isActive: 'init',
      isActiveCategory: 'init',
      isActiveTicketCategory: 'init',
      isActiveTicket: 'init'
    })
  }

  componentDidMount(){
    this.scrollRef.current.scrollLeft = 100
  }

  render(){
    return (
      <div className="top">
        <Header function={this.handleinit}/>
        {this.state.isActive === 'init' &&
          <div className="navbar">
            <div className="nav-left-wrap">
              <div className="orange">あなたのステータス</div>
              <div className="orange1">チケット購入済<br />8/1 京都〜熱海</div>
            </div>
            <div className="nav-rigth-wrap">
              <div><img className="lang" src={`${process.env.PUBLIC_URL}/language.jpg`} alt="language"/></div>
              <div className="orange1 newbuy">新規購入</div>
            </div>
          </div>
        }
        {scroll_obj.map((item) => (
        <div key={item.class}>
          <div className={`${item.class}label`}>{item.label}</div>
          <div className="horizontal-scroll-bar-wrap">
            <div className="horizontal-scroll-bar" ref={this.scrollRef}>
              {item.items.map((element,i) => (
                <div className="item" key={`item${i}`}>
                  <div className={`${item.class}item-inner`} onClick={this.handleActive} id={item.class}>
                    {element}
                  </div>
                </div>
              ))}
            </div>
            {/*<div className={`scroll-left ${item.class}`} onClick={this.scrollLeft}> ◀︎ </div>*/}
            {/*<div className={`scroll-right ${item.class}`} onClick={this.scrollRight}> ▶︎ </div>*/}
          </div>

          {/*カテゴリウィンドウ*/}
          <div className={this.state.isActive}>
            <div className={`slideup-category-wrap ${item.class}`}>
              <div className="slideup-category-title">カテゴリ</div>
              <div className="slideup-category">
                {category_obj.filter((item) => (item.item === this.state.isActiveCategory))[0].category.map((item) => (
                  <div key={item[2]}>
                    <div className="card" key={item[1]} onClick={this.handleClickCategory} id={item[2]}>
                      <div className="img">
                        <img className="rawimg" src={item[0]} alt={item[2]}/>
                      </div>
                      <div className="text">
                        {item[1]}
                      </div>
                    </div>

                    {/*チケットウィンドウ*/}
                    <div className={this.state.isActiveTicket}>
                      <div className={`slideup-ticket-wrap ${item[2]}`}>
                        <div className={`slideup-ticket-title ${item[2]}`}>
                          <div className={`slideup-ticket-title-left ${item[2]}`}>スポット</div>
                          <div className={`slideup-ticket-title-right ${item[2]}`}>最寄駅</div>
                        </div>
                        <div className={`slideup-ticket ${item[2]}`}>
                        {ticket_obj.filter((item) => (item.item === this.state.isActiveTicketCategory))[0].ticket.map((element) => (
                          <div key={element[3]} className={`radio_card ${item[2]}`}>
                            <input type="radio" id="hoge" name="hoge" className={item[2]}/>
                            <div className={`card ${item[2]}`}>
                              <div className="img">
                                <img className={`rawimg ${item[2]}`} src={element[0]} alt={element[3]}/>
                              </div>
                              <div className="text">
                                {element[1]}
                              </div>
                              <div className="station">
                                {element[2]}
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className={`continue ${item[2]}`} onClick={this.handleinit}>続ける</div>
                        <Link to="/confirm" className={`anchor ${item[2]}`}><div className={`finish ${item[2]}`}>確定する</div></Link>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        ))}

        <table>
          <tbody>
            <tr className="title">
              <th colSpan="2">東海道イベントスケジュール</th>
            </tr>
            <tr>
              <td className="elements">7月4日(木)〜7日(日)</td>
              <td className="elements">清水七夕祭り</td>
            </tr>
            <tr>
              <td className="elements">8月1日(土)〜4日(火)</td>
              <td className="elements">熱海ビール祭り</td>
            </tr>
            <tr>
              <td className="elements">8月24日(土)</td>
              <td className="elements">いわた夏祭り花火大会</td>
            </tr>
            <tr>
              <td className="elements">9月5日(土)〜6日(日)</td>
              <td className="elements">とよはし都市型アートイベント</td>
            </tr>
          </tbody>
        </table>

        <div className="season-flex-wrap">
          <div className="season-flex">
            <div className="item">
              <img className="spring" src={`${process.env.PUBLIC_URL}/spring.jpg`} alt="spring"/>
            </div>
            <div className="item">
              <img className="summer" src={`${process.env.PUBLIC_URL}/summer.jpg`} alt="summer"/>
            </div>
            <div className="item">
              <img className="fall" src={`${process.env.PUBLIC_URL}/autumn.jpg`} alt="autumn"/>
            </div>
            <div className="item">
              <img className="winter" src={`${process.env.PUBLIC_URL}/winter.jpg`} alt="winter"/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Top;
