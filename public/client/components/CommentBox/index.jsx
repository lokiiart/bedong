import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import nanoajax from 'nanoajax';

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
                        var lAvatar = <Avatar src={c.customer_avatar.customer_avatar.url} />;
                        var pText = c.customer_name+c.virtual_time+"分钟前评论了主播"+c.star_name;

                         return(
                             <div>
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
                <List>
                    {commetsBlock}
                    <ListItem
                        leftAvatar={<Avatar src="/img/index-baby1.jpg" />}
                        primaryText="赵先生7分钟前评价了服务主播袁姗姗"
                        secondaryText={
                            <p>
                                      前几天在壁咚买的充气娃娃，产品很好用，主播袁姗姗小美女服务
                                      也很到位。
                            </p>
                                      }
                        secondaryTextLines={2}
                    />
                </List>

        );
    }
}

export default CommentBox
