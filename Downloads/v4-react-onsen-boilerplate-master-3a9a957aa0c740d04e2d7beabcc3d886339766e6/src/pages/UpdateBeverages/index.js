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

// class UpdateBeverages extends Component {
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
    
//     render(){
//         return(
//             <Page >
//                 <Ons.Toolbar>
//                     <div className="center">Beverages</div>
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
//                                 <div className = "name"> {row.customer_name}</div>
//                                 <div className = "date">{row.date}</div>
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
//                     <ActionSheetButton onClick={this.handleNotify.bind(this)}>Notify Customer</ActionSheetButton>
//                     <ActionSheetButton onClick={this.handleDelete.bind(this)}>Order Completed</ActionSheetButton>
//                     <ActionSheetButton onClick={this.handleCancel.bind(this)} icon={'md-close'}>Cancel</ActionSheetButton>
//                 </ActionSheet>
//             </Page>
//         )
//     }
// }

// export default UpdateBeverages;
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

class UpdateBeverages extends Component {
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
                    <div className="center">Beverages</div>
                    <div className="right">
                        {/* <Ons.ToolbarButton onClick={this.handleLogout}>Logout</Ons.ToolbarButton> */}
                        <a href="#" onClick={e=>this.logoutHandler(e)}>Logout</a>
                    </div>
                </Ons.Toolbar>
                <ons-button modifier="large" style={{marginTop:'43px', borderRadius:'0px'}}> +  Add Drinks</ons-button>   
                    <List style={{paddingTop:''}}
                    // renderHeader={() => <ListHeader>Components</ListHeader>}
                    dataSource={[
                            {
                                "coffee_name":"Cafe Latte ",
                                img:"https://i.ibb.co/tzvcqL0/espresso3.png",
                            },
                            {
                                "coffee_name":"Flat White",
                            },
                            {
                                "coffee_name":"Espresso",
                            },
                            {
                                "coffee_name":"Chocolate",
                            }
                        
                        
                    ]}
                renderRow={(row) =>
                    <ListItem key={row.key} tappable onClick={this.gotoComponent.bind(this, row)}>   
                        <div className = "firstrowbeans">
                        <img className = "beverageimg" src="https://i.ibb.co/jW0JTwP/002-bean.png" alt="Logo" width="40px" height="50px"/>
                            <div className = "beveragename">{row.coffee_name}</div>
                            <div class="bevtoggleswitch"><ons-switch checked></ons-switch></div>
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

export default UpdateBeverages;