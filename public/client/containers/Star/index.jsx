import React, {
  Component
} from 'react';
import classnames from 'classnames';
import FontIcon from 'material-ui/FontIcon';
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import nanoajax from 'nanoajax';
import {
    pink500,
    blueGrey50
} from 'material-ui/styles/colors';
import style from './style.css';

const styles={
    chip: {
        color: '#9b9b9b',
        position: 'absolute',
        right: '0'
    },
    chipem: {
        color: '#ff0090',
        fontStyle: 'normal'
    },
    chip2: {
        position: 'absolute',
        right: '8rem',
        color: '#fff'
    }
};

class Star extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            summart: '',
            avatar: '',
            score: '',
            favorite: '',
            intro_image: '',
            tags: []
        };
    }

    componentDidMount(){
        nanoajax.ajax({url:'/stars/'+this.props.params.starId+'.json'}, function(code, response){
            var stardata = JSON.parse(response);
            this.setState({
                name: stardata.name,
                summart: stardata.summart,
                avatar: stardata.avatar.url,
                score: stardata.score,
                favorite: stardata.favorite,
                intro_image: stardata.intro_image.url,
                tags: stardata.tags
            });
        }.bind(this));
    }

  render() {
      var tags = this.state.tags;

    const {
      children
    } = this.props;
    return (
      <div className={style.star}>
        <div className={classnames('clearfix', style.summary)}>
          <div className={style.avatar}>
              <Avatar src={this.state.avatar} size={70} />
          </div>
          <div className={style.info}>
            <h3>{this.state.name}</h3>
            <p>{this.state.summart}</p>
          <div className={style.likeinfo}>
              <Chip style={styles.chip}>
                  服务评分 <em style={styles.chipem}>{this.state.score}</em>分
              </Chip>
              <Chip style={styles.chip2}>
                  <FontIcon className="material-icons" style={{color: '#ff0090',verticalAlign: 'middle'}}>favorite</FontIcon>
                  <span>{this.state.favorite} 人点赞</span>
              </Chip>
          </div>
          </div>
        </div>
        <div className={style.tags}>
            <h3>主播标签</h3>
            {tags.map(function(t){
                 return (
                 <Chip backgroundColor={pink500} labelColor={blueGrey50} style={{display: 'inline-block',marginRight: '1rem'}}>
                    {t.tagname}
                </Chip>
                 );
             })}
        </div>
        <img src={this.state.intro_image} />
        <div className={style.photos}>
            <h3>主播相册</h3>
            <GridList cols={4} padding={10}>
                <GridTile>
                    <div className={style.testTile}></div>
                </GridTile>
                <GridTile>
                    <div className={style.testTile}></div>
                </GridTile>
                <GridTile>
                    <div className={style.testTile}></div>
                </GridTile>
                <GridTile>
                    <div className={style.testTile}></div>
                </GridTile>
            </GridList>
        </div>
      </div>
    );
  }
}

export default Star
