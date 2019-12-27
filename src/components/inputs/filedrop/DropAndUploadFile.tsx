/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import Dropzone from 'react-dropzone';
import { LinearProgress } from '@material-ui/core';

export interface IDropAndUploadFileProps {
  onError: () => void;
  onPaused: () => void;
  onResumed: () => void;
  onUploaded: (uploadUrl: string) => void;
  validation: string[];
}

class DropAndUploadFile extends React.Component<IDropAndUploadFileProps> {

  public state = { files: [], progress: 0 };

  /** validates dropped file and starts upload */
  public handleDrop = (files: any[]) => {
    this.setState({
      files
    });
    // const file = files[0];
    const { validation } = this.props;
    if (validation) {
      ;
      /* handle validation */
    }
    /* handle file upload */
  }

  public render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.handleDrop}>
            <p>Drop a file here, or click to select file to upload.</p>
          </Dropzone>
          <br />
          <LinearProgress variant="determinate" value={this.state.progress} />
        </div>
      </section>
    );
  }
}

export default DropAndUploadFile;


