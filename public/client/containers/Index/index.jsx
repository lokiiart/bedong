import React, {Component} from 'react'
import {browserHistory, Link} from 'react-router'
import {darkBlack, pink500, blueGrey50} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';
import CommentBox from '../../components/CommentBox'
import nanoajax from 'nanoajax';
import style from './style.css'


class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            stars: [],
            babies: []
        };
    }

    componentDidMount(){
        nanoajax.ajax({url: '/babies.json'}, function(code, response){
            var babies = JSON.parse(response);
            this.setState({
                babies: babies
            });
        }.bind(this));
        nanoajax.ajax({url: '/stars.json'}, function(code, response){
            var stars = JSON.parse(response);
            this.setState({
                stars: stars
            });
        }.bind(this));
    }

  render() {
      var stars = this.state.stars;
      var babies = this.state.babies;
    return (
        <div className={style.indexPage}>
            <div className={style.banner}>
                <img src='/img/index-banner.jpg' />
                <Link to="/star/3">
                    <Chip className={style.bannerButton} backgroundColor={pink500} labelColor={blueGrey50}>
                        <em className={style.bannerText}>50位美女主播</em>在线为你服务
                    </Chip>
                </Link>
            </div>


            <div className={style.block}>
                <h2 className={style.blockTitle}>热门推荐</h2>
                <GridList col={2} padding={19} cellHeight={"auto"}>
                    {
                        babies.map(function(b){
                            if(b.star){
                                return(
                                    <Link to={"/baby/"+b.id}>
                                        <Paper  zDepth={1} rounded={false} >
                                            <GridTile>
                                                <div className={style.baby}>
                                                    <img src={b.avatar.avatar.url} />
                                                    <div className={style.babyOverlay}>
                                                        <p>清纯美少女版娃娃</p><span><p>￥{b.price}</p></span>
                                                    </div>
                                                </div>
                                                <div className={style.starForBaby}>
                                                    <div className={style.starAvatar}>
                                                        <Avatar src={b.star.avatar.url} size={60} />
                                                    </div>
                                                    <p><em>服务主播：</em>{b.star.summart}</p>
                                                </div>
                                            </GridTile>
                                        </Paper>
                                    </Link>
                                );
                                
                            }else{
                                    <Link to={"/baby/"+b.id}>
                                        <Paper  zDepth={1} rounded={false} >
                                            <GridTile>
                                                <div className={style.baby}>
                                                    <img src={b.avatar.avatar.url} />
                                                    <div className={style.babyOverlay}>
                                                        <p>清纯美少女版娃娃</p><span><p>￥{b.price}</p></span>
                                                    </div>
                                                </div>
                                            </GridTile>
                                        </Paper>
                                    </Link>
                                
                            }
                        })
                    }
                </GridList>
            </div>
            <div className={style.block}>
                <h2 className={style.blockTitle}>客户评论</h2>
                <CommentBox />
            </div>
            <div className={style.block}>
                <h2 className={style.blockTitle}>最新入驻主播</h2>
                    <GridList cols={4} cellHeight={"auto"}>
                        {
                            stars.map(function(s){
                                return(
                                        <Link to={"/star/"+s.id}>
                                            <GridTile>
                                            <div className={style.newStar}>
                                                <Avatar src={s.avatar.avatar.url} size={80} />
                                                <p>{s.name}</p>
                                            </div>
                                            </GridTile>
                                        </Link>
                                );
                            })
                        }
                    </GridList>
            </div>
            <div className={style.block}>
                <h2 className={style.blockTitle}>合作伙伴</h2>
                <img src="img/index-friends.jpg" />
            </div>
        </div>
    )
  }
}

export default Index
