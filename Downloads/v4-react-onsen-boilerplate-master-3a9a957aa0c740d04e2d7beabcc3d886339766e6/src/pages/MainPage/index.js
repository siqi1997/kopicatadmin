/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authenticate } from '../../actions/userActions';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // this.props.authenticate(null);
    // window.location.reload();
    
  }

  
  render() {
    const { index } = this.state;
    
    return (
      
      <Ons.Page>
        <Ons.Toolbar>
          <div className="center">{index==0?"Incoming Orders":"Order History"}</div>
          <div className="right">
            <Ons.ToolbarButton onClick={this.handleLogout}>Logout</Ons.ToolbarButton>
          </div>
        </Ons.Toolbar>
        <Ons.Tabbar
          onPreChange={({ index: idx }) => this.setState({ index: idx })}
          onPostChange={() => console.log('postChange')}
          onReactive={() => console.log('postChange')}
          position="bottom"
          index={index}
          renderTabs={this.renderTabs}

          // renderTabs={(activeIndex, tabbar) => [
          //   {
          //     content: <Ons.Page title="Home" active={activeIndex === 0} tabbar={tabbar} key={0} />,
          //     tab: <Ons.Tab label="Orders" icon="md-home" key={0} />
          //   },
          //   {
          //     content: (
          //       <Ons.Page title="Settings" active={activeIndex === 1} tabbar={tabbar} key={1} />
          //     ),
          //     tab: <Ons.Tab label="Order History" icon="md-settings" key={1} />
          //   }
          // ]}
        />
      </Ons.Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticate }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);


