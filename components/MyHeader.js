import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Icon,Badge} from 'react-native-elements';

export default class MyHeader extends Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }

    getNumberOfUnreadNotifications(){
        db.collection('all_notifications').where('notification_status', '==', "unread")
        .onSnapshot((snapshot)=>{
            var unreadNotifications=snapshot.docs.map((doc)=>doc.data())
            this.setState({
                value:unreadNotifications.length
            })
        })
    }

    componentDidMount(){
        this.getNumberOfUnreadNotifications()
    }

    BellIconWithBadge=()=>{
        return(
            <View>
                <Icon name = 'bell' type = 'font-awesom' color='#696969'size = {25}
                onPress = {()=>props.navigation.navigate('Notification')}/>
                <Badge
                value = {this.state.value}
                containerStyle = {{position:'absolute', top:-4,right:-4}}/>
            </View>
        )
    }

    render(){
        return(
            <Header
            leftComponent={<Icon name = 'bars' type = 'font-awesom' color = '#696969' onPress = {()=>this.props.navigation.toggleDrawer()}/>}
            centerComponent={{text:this.props.title, style:{color:'#98bcad',fontSize:20,fontWeight:'bold'}}}
            rightComponent={<this.BellIconWithBadge {...this.props}/>}
            backgroundColor = '#234f45'
            />
        );
    }
}
