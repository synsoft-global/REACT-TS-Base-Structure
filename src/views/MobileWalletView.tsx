/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

// import { Card, ItemGrid, Panel, Table } from 'src/components';

// import { Grid } from '@material-ui/core';

// const rootStyle = {
//   flexGrow: 1
// };

export default class MobileWalletView extends React.Component {
  public state = {
    selectedTab: 0
  };

  public render() {
    return 'TODO';
    // return (
    //   <Grid container = {true}>
    //     <ItemGrid xs={12} sm={12} md={8}>
    //       <Card.Tabbed
    //         title=""
    //         onTabSelect={this.handleTabSelect}
    //         tabs={[
    //           {
    //             component: <Table.Campaign  />,
    //             label: 'Campaigns'
    //           },
    //           {
    //             component: <Table.Schedule  />,
    //             label: 'Schedules'
    //           }
    //         ]}
    //       />
    //     </ItemGrid>
    //     <ItemGrid xs={12} sm={12} md={4}>
    //       <Card.Regular
    //         cardTitle={this.getPropertyPanelTitle()}
    //         cardSubtitle={this.getPropertyPanelSubtitle()}
    //         content={
    //           <div>
    //             {this.state.selectedTab === 0 && <Panel.Campaign  />}
    //             {this.state.selectedTab === 1 && <Panel.Schedule  />}
    //           </div>
    //         }
    //       />
    //     </ItemGrid>
    //   </Grid>
    // );
  }

  // private handleTabSelect = (selectedTab : number) => this.setState({ selectedTab });

  // private getPropertyPanelTitle() {
  //   if (this.state.selectedTab === 0) {return 'Campaign Properties';}
  //   if (this.state.selectedTab === 1) {return 'Pass Properties';}
  //   return null;
  // }

  // private getPropertyPanelSubtitle() {
  //   if (this.state.selectedTab === 0) {return 'Select campaign in table, then edit here';}
  //   if (this.state.selectedTab === 1) {return 'Select pass in table, then edit here';}
  //   return null;
  // }

}
