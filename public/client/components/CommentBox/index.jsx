import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import nanoajax from 'nanoajax';
import style from './style.css'

class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = {
           commets: [] 
        };
    }
    componentDidMount(){
        nanoajax.ajax({url:'/commets.json'}, function(code, response){
            var commets = JSON.parse(response);
            this.setState({
                commets: commets
            });
        }.bind(this));
    }

    render(){
        var commets = this.state.commets;
        var commetsBlock = 
                    commets.map(function(c){
                        var lAvatar = <Avatar src={c.customer_avatar.customer_avatar.url} size={50} />;
                        /* var pText = c.customer_name+c.virtual_time+"分钟前评论了主播"+c.star_name;*/
                        var pText = <p className={style.commentTitle}><em className={style.colorTitle}>{c.customer_name}</em>{c.virtual_time}分钟前评论了<em className={style.colorTitle}>主播{c.star_name}</em></p>;

                         return(
                             <div className={style.box}>
                            <ListItem
                                leftAvatar={lAvatar}
                                primaryText={pText}
                                secondaryText={
                                    <p>
                                              {c.content}
                                    </p>
                                            }
                                secondaryTextLines={2}
                            />
                            <Divider inset={true} />
                             </div>
                         );
                     });
        return (
                <div className={style.blockComment}>
                    <List>
                        {commetsBlock}
                    </List>
                </div>

        );
    }
}

export default CommentBox
