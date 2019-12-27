/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import DefaultExpansionPanel from './Default';
import { Filedrop } from 'src/components/inputs/filedrop';
import { Grid } from '@material-ui/core';

interface IImageUploadExpansionPanel {
  // TODO, just put dummy here for now to avoid TS error
  dummy: boolean;
}

export default class extends React.Component<IImageUploadExpansionPanel> {

  public handleUploaded = (downloadUrl: string) => {
    // TODO
    ;
  };

  public handleUploadError = () => console.log('an upload error occurred');

  public handleUploadPaused = () => console.log('upload has been paused');

  public handleUploadResumed = () => console.log('upload has been resumed');

  public render() {
    return (
      <DefaultExpansionPanel title='Image Upload' defaultExpanded={true}>
        <Grid container={true} spacing={8}>
          <Grid item={true} xs={6}>
            <Filedrop.Image
              // bucket={bucket}
              // store file under the key of its associated data object
              // nodeName={null/*TODO*/}
              onError={this.handleUploadError}
              onPaused={this.handleUploadPaused}
              onResumed={this.handleUploadResumed}
              onUploaded={this.handleUploaded}
            // style={{width:'50%'}} // TODO: does not work
            />
          </Grid>
          <Grid item={true} xs={6}>
            <img src="/*TODO*/" height='150px' />
          </Grid>
        </Grid>
      </DefaultExpansionPanel>
    );
  }
}
