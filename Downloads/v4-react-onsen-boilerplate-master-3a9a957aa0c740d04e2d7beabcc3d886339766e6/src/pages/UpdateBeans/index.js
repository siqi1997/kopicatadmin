// import React, { Component } from 'react';
// import * as Ons from 'react-onsenui';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { authenticate } from '../../actions/userActions';

// import '../../../public/style/css/onsen-css-components.css';

// import {
//     Page,
//     Toolbar,
//     List,
//     ListItem,
//     ListHeader,
//     ActionSheet,
//     ActionSheetButton
//   } from 'react-onsenui';

// require('./style.scss')

// class UpdateBeans extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             isOpen:false,
//             img: {
//                 Espresso: "https://i.ibb.co/tzvcqL0/espresso3.png",
//                 Cappucino: "https://i.ibb.co/pnfyxR3/Cappuccino.png",
//                 Mocha: "https://i.ibb.co/y802TG2/Mocha.png",
//                 Latte: "https://i.ibb.co/pP3Yzdg/latte.png"
//             },
//             orders: [],
//             index: 0,
//         }
//         this.openAction = this.openAction.bind(this);
//     }

//     componentDidMount(){
//         this.fetchOrders()
//     }
          
//     openAction(index,row) {
//         console.log(row,'row')
//         console.log(index,'index')
//         this.setState({ isOpen : true})
//         this.setState({index:index})
//     }

//     handleCancel(){
//        this.setState({ isOpen: false })
//     }

//     handleDelete(item){
//         const { orders, index } = this.state
//         orders.splice(index, 1)
//         this.setState({orders})
//         this.setState({ isOpen: false })
//     }

//     handleNotify(item){
//         // this.setState({ })
//     }

//     handleLogout(){
        
//     }

//     fetchOrders(){
//         fetch('https://ug-api.acnapiv3.io/swivel/acnapi-common-services/common/classes/Kopicat/31tVUTsEIJ',{
//             method:'GET',
//             headers: {
//                 "Server-Token": `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6Y3hRVEl5UkRVeU1qYzNSakEzTnpKQ01qVTROVVJFUlVZelF6VTRPRUV6T0RreE1UVTVPQSJ9.eyJpc3MiOiJodHRwczovL2FjbmFwaS1wcm9kLmF1dGgwLmNvbS8iLCJzdWIiOiJ1QkVQUTVpZDR0RmVlcE9wQjBwd3E1RnRxTUZZNW9QT0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vcGxhY2UiLCJpYXQiOjE1NDk4NzQ3NzQsImV4cCI6MTU1MjQ2Njc3NCwiYXpwIjoidUJFUFE1aWQ0dEZlZXBPcEIwcHdxNUZ0cU1GWTVvUE8iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.d6qVXnj5AoEvn7v8-Vshl8lrKByMl0F3pIWHcj2C9VdAuiMvOmtWrAFkfl7TwCJdEoPLzTndX2mBQ9OHE0kqfgqNKX9xP5KMOv-NvgQgiLFrG-DG6RiRy6_myJdGAOm52QpHsIG1OLicecU62zbw6EhYM8lKYGcLDUE9H9a3G5H28Ex5P2zG9NdcVv-FFwqmaCY_7Q3bwEOx_T5jfWqeyXaiTZiveENCS7avmybpDyZ06Os96_mQJppVc7P3Fe2dFj8L72cLW2zOOV2eKFuNRD8MR0x3H6dXcXVe9vMiFV_zwxh5ASUAkxIoNby6o5v7KPdBshnTxi4YHSXmHH8rlw`,
//                 'Content-Type': 'application/json'
//             },
//         })
//         .then(response => response.json())
//         .then(data => {
//             this.setState({ orders: data.data})
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     }

    
//     render(){
//         const { checked } = this.state;
//         return(
//             <Page >
//                 <Ons.Toolbar>
//                     <div className="center">Beans</div>
//                     <div className="right">
//                         <Ons.ToolbarButton onClick={this.handleLogout}>Logout</Ons.ToolbarButton>
//                     </div>
//                 </Ons.Toolbar>

//                 <List style={{paddingTop:'40px'}}
//                 // renderHeader={() => <ListHeader>Components</ListHeader>}
//                 dataSource={this.state.orders}
//                 renderRow={(row, idx) =>{
//                     // console.log(index)
//                     return(
//                         <ListItem key={row.key} tappable onClick={()=>this.openAction(idx,row)}>       
//                             <div className = "firstrow">
//                                 <img className = "coffeeimg" src={this.state.img[row.coffee_name]} alt="Logo" width="40px" height="50px"/>
//                                 <div className = "coffeename">{row.coffee_name}</div>
//                                 <div className = "toggleswitch">Placeholder</div>
//                                 {/* <div className = "name"> {row.customer_name}</div>
//                                 <div className = "date">{row.date}</div> */}
//                             </div>
//                         </ListItem>
//                     )
                   
//                  }
//                 }
//                 />

//                 <ActionSheet 
//                     isOpen={this.state.isOpen} 
//                     animation='default'
//                     onCancel={this.handleCancel.bind(this)}
//                     isCancelable={true}
//                     title={''}
//                     >
//                     <ActionSheetButton onClick={this.handleNotify.bind(this)}>Set Available</ActionSheetButton>
//                     <ActionSheetButton onClick={this.handleDelete.bind(this)}>Not Available</ActionSheetButton>
//                     <ActionSheetButton onClick={this.handleCancel.bind(this)} icon={'md-close'}>Cancel</ActionSheetButton>
//                 </ActionSheet>
//             </Page>
//         )
//     }
// }

// export default UpdateBeans;

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

class UpdateBeans extends Component {
    constructor(props){
        super(props)
        this.state={
            isOpen:false,
            onClick:true,
            img: {
                Arabica: "https://i.ibb.co/jW0JTwP/002-bean.png",
                Robusts: "https://i.ibb.co/jW0JTwP/002-bean.png",
                Emporio: "https://i.ibb.co/jW0JTwP/002-bean.png",
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
                    <div className="center">Update Beans</div>
                    <div className="right">
                        {/* <Ons.ToolbarButton onClick={this.handleLogout}>Logout</Ons.ToolbarButton> */}
                        <a href="#" onClick={e=>this.logoutHandler(e)}>Logout</a>
                    </div>
                </Ons.Toolbar>
                <ons-button modifier="large" style={{marginTop:'45px', borderRadius:'0px'}}> +  Add Beans</ons-button>

                    <List style={{paddingTop:'40px'}}
                    // renderHeader={() => <ListHeader>Components</ListHeader>}
                    dataSource={[
                            {
                                "coffee_name":"Arabica Beans",
                            },
                            {
                                "coffee_name":"Robusts Beans",
                            }
                        
                    ]}
                renderRow={(row) =>
                    <ListItem key={row.key} tappable onClick={this.gotoComponent.bind(this, row)}>       
                        <div className = "firstrowbeans">
                        <img className = "beansimg" src="https://i.ibb.co/jW0JTwP/002-bean.png" alt="Logo" width="40px" height="50px"/>
                            <div className = "beansname">{row.coffee_name}</div>
                            <div class="toggleswitch"><ons-switch checked></ons-switch></div>
                            {/* <div className = "name"> {row.customer_name}</div>
                            <div className = "date">{row.date}</div> */}
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

export default UpdateBeans;