import React, { Component } from 'react';
import styled from 'react-emotion';
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

import HolderImg from '../img/holder.jpg'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      donateCardInfo: {
        decision: 'Apple iPad Pro (10.5") 512GB Cellular MPMF2LL/A',
        category: 'Electronics / Tablets / Apple iPads',
        slp: '2256464874',
        upc: '6555055040',
        price: 560,
        imageUrl: `${HolderImg}`,
        canVoid: true,
        canReprint: true,
        isVoided: false,
      },
    };

  };

  render() {
    const currentYear = String(new Date().getFullYear());

    return (
      <StyledApp className="App">
        <Header 
          titleColor="#e61610" 
          myCompany="Disposition Management"
        />
        <MainContent 
          donateCardInfo={this.state.donateCardInfo}
          voidDonate={this.voidDonate}
        />
        <Footer
          currentYear={currentYear}
        />
      </StyledApp>
    );
  };

  voidDonate = () => {
    if (!this.state.donateCardInfo.isVoided)  {
      let updatedDonateCardInfo = {
        ...this.state.donateCardInfo,
      }
      updatedDonateCardInfo.isVoided = true;
      this.setState({donateCardInfo: updatedDonateCardInfo})
    }
  }
}



const StyledApp = styled('div')`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  font-family: arial, sans-derif;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color:  #3b3b3b;
`

export default App;
