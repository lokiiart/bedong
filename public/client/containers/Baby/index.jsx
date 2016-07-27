import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {hashHistory, Link} from 'react-router'
import Avatar from 'material-ui/Avatar'
import Affix from '../../components/Affix'
import Cart from '../../components/Cart'
import CommentBox from '../../components/CommentBox'
import style from './style.css'
import nanoajax from 'nanoajax';

const customContentStyle = {
    width: '100%',
    maxWidth: '550px',
    margin: '0 auto',
    height: '90%',
    left: '0',
    right: '0',
    bottom: '0',
    position: 'absolute'
};

const myStyle ={
    color:'#fff',
    maxHeight:'auto',
    padding:'0 5px',
    height:'100%'
};

class Baby extends Component {
    constructor(props){
        super(props);
        this.state = {
            baby: {"id":2,"name":"清纯美少女版娃娃","avatar":{"avatar":{"url":"/uploads/baby/avatar/2/__1_03.jpg"}},"price":398,"star_id":1,"banner":{"banner":{"url":"/uploads/baby/banner/2/baby_02.jpg"}},"intro":{"intro":{"url":"/uploads/baby/intro/2/baby03.jpg"}},"created_at":"2016-07-20T07:35:42.000Z","updated_at":"2016-07-20T07:35:42.000Z","star":{"id":2,"name":"娇娇","avatar":{"url":"/uploads/star/avatar/2/__1_20.jpg"},"summart":"袁姗姗，中国内地女艺人，1987年2月22日出生于湖北省襄阳市\u003c","favorite":111,"score":9.8,"intro_image":{"url":"/uploads/star/intro_image/2/baby03.jpg"},"created_at":"2016-07-19T22:31:21.000Z","updated_at":"2016-07-20T08:30:58.000Z","tags":[{"id":18,"tagname":"111渣渣","num":null,"created_at":"2016-07-19T22:48:07.000Z","updated_at":"2016-07-19T22:48:07.000Z"},{"id":19,"tagname":"test","num":null,"created_at":"2016-07-19T22:48:30.000Z","updated_at":"2016-07-19T22:48:30.000Z"}],"tagid":null,"baby_id":2}}
        };
    }


    componentDidMount(){
        nanoajax.ajax({url: '/babies/'+this.props.params.babyId+'.json'}, function(code, response){
            var baby = JSON.parse(response);
           this.setState({
                baby: baby
            });
        }.bind(this));
    };

    handleOpen = () => {
        hashHistory.push('/cart/'+this.props.params.babyId);
    };



  render() {
      var baby = this.state.baby;
    return (
        <div>
            <img src={baby.banner.banner.url} />
            <div className={style.toStar}>
                <div className={style.toStarTitle}>
                    <h3>视频服务美女主播</h3>
                    <Link to={"/star/"+baby.star.id}>
                    <span>
                        <h3>
                        了解美女主播的服务
                        </h3>
                    </span>
                    </Link>
                </div>
                <div className={style.toStarContent}>
                    <Link to={"/star/"+baby.star.id}>
                    <Avatar size={80} src={baby.star.avatar.url} />
                    </Link>
                    <div className={style.rightContent}>
                        <p>{baby.star.name}</p>
                        <p>{baby.star.summart}
                    <Link to={"/star/"+baby.star.id}>
                            更多介绍</Link></p>
                    </div>
                </div>
            </div>
            <img src={baby.intro.intro.url} />
            <Affix className="test" offset={390} onTouchTap={this.handleOpen}>
                <div className={style.affixBox1}>
                    <div className={style.price}>
                     ￥{baby.price}元
                    <del>￥{baby.originalPrice}元</del>
                    </div>
                    <div className={style.daogou}>已销售{baby.selled}件</div>
                </div>
                <div className={style.affixBox2}>
                    <div className={style.affixItem1}>
                        {baby.longname}
                    </div>
                    <div className={style.affixItem2}>
                        <img src="/img/buy.png" />
                    </div>
                </div>
            </Affix>
            <img src="/img/baby-intro.jpg" />
            <div className={style.block}>
                <h2 className={style.blockTitle}>客户评论</h2>
                <CommentBox />
            </div>
        </div>
    )
  }
}

export default Baby
