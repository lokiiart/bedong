import React, {Component} from 'react'
import {hashHistory, Link} from 'react-router'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {
  pink500
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Area from '../Area';
import TextField from 'material-ui/TextField';
import areaData from './areaData';
import nanoajax from 'nanoajax';
import style from './style.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: pink500,
  },
});

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            /* "utf8" : "✓",
             * "commit" : "Create Order",
             * "order" : {
             *     "customer" : "",
             *     "phone" : ""
             * }*/
            baby: {"id":2,"name":"清纯美少女版娃娃","avatar":{"avatar":{"url":"/uploads/baby/avatar/2/__1_03.jpg"}},"price":398,"star_id":1,"banner":{"banner":{"url":"/uploads/baby/banner/2/baby_02.jpg"}},"intro":{"intro":{"url":"/uploads/baby/intro/2/baby03.jpg"}},"created_at":"2016-07-20T07:35:42.000Z","updated_at":"2016-07-20T07:35:42.000Z","star":{"id":2,"name":"娇娇","avatar":{"url":"/uploads/star/avatar/2/__1_20.jpg"},"summart":"袁姗姗，中国内地女艺人，1987年2月22日出生于湖北省襄阳市\u003c","favorite":111,"score":9.8,"intro_image":{"url":"/uploads/star/intro_image/2/baby03.jpg"},"created_at":"2016-07-19T22:31:21.000Z","updated_at":"2016-07-20T08:30:58.000Z","tags":[{"id":18,"tagname":"111渣渣","num":null,"created_at":"2016-07-19T22:48:07.000Z","updated_at":"2016-07-19T22:48:07.000Z"},{"id":19,"tagname":"test","num":null,"created_at":"2016-07-19T22:48:30.000Z","updated_at":"2016-07-19T22:48:30.000Z"}],"tagid":null,"baby_id":2}},
        area: " ",
        door: " ",
            address: " ",
            errorCustomer: "",
            errorPhone: '',
            errorAddresss: '',
            payment: '支付宝'
        };
    }

    handlePayment(e,v){
        this.setState({payment: v});
    }

    handleBack(){
        hashHistory.push('/baby/'+this.state.baby.id);
    }

    componentWillMount(){
        console.log("which baby:"+this.props.params.babyId);
        nanoajax.ajax({url: '/babies/'+this.props.params.babyId+'.json'}, function(code, response){
            var baby = JSON.parse(response);
           this.setState({
                baby: baby
            });
        }.bind(this));
    }

    handleArea(province, city, county){
        this.setState({area: province+city+county,address:province+city+county+this.state.door});
    }

    handleDoor(e){
        const address = this.state.address+e.target.value;
        this.setState({door:e.target.value, address:address});
    }

    handleCustomer(e){
            this.state.errorCustomer="请正确填写姓名";
    }

    handleForm(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        if(this.state.payment =="货到付款"){
            nanoajax.ajax({
                url: '/orders',
                method: 'POST',
                body: formData
            }, function(code, response){
                let rep = JSON.parse(response);
                if(rep.error){
                    alert(rep.info);
                }else{
                    if(rep.updated_at){
                        alert("订购成功");
                    }
                }
            });
        }else if(this.state.payment == "支付宝"){
            nanoajax.ajax({
                url: '/orders',
                method: 'POST',
                body: formData
            }, function(code, response){
                try{
                    let rep = JSON.parse(response);
                    if(rep.error){
                        alert(rep.info);
                    }
                }catch(e){
                        form.submit();
                }
            });
        }else{
            alert("请选择合适的支付方式");
        }
    }


    render(){
        const baby = this.state.baby;
        return (
      <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <div onTouchTap={this.handleBack.bind(this)}>
                <div className={style.affixBox1}>
                    <div className={style.price}>
                     ￥{baby.price}元
                    <del>￥{baby.originalPrice}元</del>
                    </div>
                    <div className={style.daogou}>已销售{baby.selled}件</div>
                </div>
                <div className={style.affixBox2}>
                    <div className={style.affixItem2}>
                        <img src={baby.avatar.avatar.url} />
                    </div>
                    <div className={style.affixItem1}>
                        {baby.longname}
                    </div>
                </div>
                </div>
                <form method="POST" action="/orders" onSubmit={this.handleForm.bind(this)}>
                    <input type="hidden" name="order[baby]" value={baby.name} />
                    <input type="hidden" name="order[price]" value={baby.price} />
                    <input type="hidden" name="order[address]" value={this.state.address} />
                <div className={style.wrapper}>
                    <div className={style.title}>
                        <legend>基本信息</legend>
                    </div>
                    <div className={style.content} >
                        <TextField
                            name="order[customer]"
                            hintText="请输入你的姓名"
                            floatingLabelText="姓名"
                            style={{width:'80%'}}
                        />
                        <TextField
                            name="order[phone]"
                            hintText="请输入你的手机号码"
                            floatingLabelText="手机"
                            style={{width:'80%'}}
                        />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.title}>
                    <legend>收货地址</legend>
                    </div>
                    <div className={style.content}>
                        <div className={style.area}>
                        <Area data={data} options={AreaOptions} onProvinceChange={this.handleArea.bind(this)} />
                        </div>
                        <TextField
                            hintText="镇、街道、小区名、门牌号"
                            onChange={this.handleDoor.bind(this)}
                            style={{width:'100%'}}
                        />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.title}>
                    <legend>支付方式</legend>
                    </div>
                    <div className={style.content}>
                        <RadioButtonGroup name="order[payment]" defaultSelected="支付宝" onChange={this.handlePayment.bind(this)}>
                            <RadioButton
                                value="支付宝"
                                label="支付宝"
                            />
                            <RadioButton
                                value="货到付款"
                                label="货到付款"
                            />
                        </RadioButtonGroup>
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.submit}>
                    <RaisedButton
                        label="购买"
                        secondary={true}
                        keyboardFocused={true}
                        type="submit"
                    />
                    </div>
                </div>
                </form>
            </div>
      </MuiThemeProvider>
        )
    }
}

let AreaOptions= {
    defaultText:['省份','城市','区县']
};

let data = areaData;

export default Cart
