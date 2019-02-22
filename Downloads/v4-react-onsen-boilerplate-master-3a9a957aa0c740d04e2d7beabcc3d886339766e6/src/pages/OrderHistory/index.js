import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/userActions';



import {
    Page,
    Toolbar,
    List,
    ListItem,
    ListHeader,
    ActionSheet,
    ActionSheetButton
  } from 'react-onsenui';

require('./style.scss')

class OrderHistory extends Component {
    constructor(props){
        super(props)
        this.state={
            isOpen:false,
            onClick:true,
            

            img: {
                Espresso: "https://i.ibb.co/tzvcqL0/espresso3.png",
                Cappucino: "https://i.ibb.co/pnfyxR3/Cappuccino.png",
                Mocha: "https://i.ibb.co/y802TG2/Mocha.png",
                Latte: "https://i.ibb.co/pP3Yzdg/latte.png"
            }
        }
    }
          
    gotoComponent(row) {
        this.setState({ isOpen : true})
    }

    handleCancel(){
       this.setState({ isOpen: false })
    }

  

    render(){
        return(

            <Page >
                <Ons.Toolbar>
                    <div className="center">Orders History</div>
                    <div className="right">
                        {/* <Ons.ToolbarButton onClick={this.handleLogout}>Logout</Ons.ToolbarButton> */}
                        <a href="#" onClick={e=>this.logoutHandler(e)}>Logout</a>
                    </div>
                </Ons.Toolbar>
                    <List style={{paddingTop:'40px'}}
                    // renderHeader={() => <ListHeader>Components</ListHeader>}
                    dataSource={[
                        {
                            "coffee_name":"Cappucino",
                            "customer_name":"ShengJia",
                            "date":"Just Now"
                        },
                        {
                            "coffee_name":"Espresso",
                            "customer_name":"Andrew",
                            "date":"10.36am"
                        }
                        

                        ]}
                renderRow={(row) =>
                    <ListItem key={row.key} tappable onClick={this.gotoComponent.bind(this, row)}>       
                        <div className = "firstrow">
                        <img className = "coffeeimg" src={this.state.img[row.coffee_name]} alt="Logo" width="40px" height="50px"/>
                            <div className = "coffeename">{row.coffee_name}</div>
                            <div className = "name"> {row.customer_name}</div>
                            <div className = "date">{row.date}</div>
                        </div>
                    </ListItem>
                }
                />

                {/* <ActionSheet 
                    isOpen={this.state.isOpen} 
                    animation='default'
                    onCancel={this.handleCancel.bind(this)}
                    isCancelable={true}
                    title={'Actions'}
                    >
                    <ActionSheetButton onClick={this.handleCancel.bind(this)}>Notify Customer</ActionSheetButton>
                    <ActionSheetButton onClick={this.handleCancel.bind(this)}>Order Completed</ActionSheetButton>
                    <ActionSheetButton onClick={this.handleCancel.bind(this)} icon={'md-close'}>Cancel</ActionSheetButton>
                </ActionSheet> */}
            </Page>
        )
    }
}

export default OrderHistory;