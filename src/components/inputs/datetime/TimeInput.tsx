/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import { TextField } from '@material-ui/core';
import TimeField from 'react-simple-timefield';
import { Timer } from '@material-ui/icons';

interface ITimeInputProps {
  label: string;
  value: any;
}

export default class extends React.Component<ITimeInputProps> {

  public render() {
    const { label, value } = this.props;
    return (
      <div style={{ marginRight: 20 }}>
        {label}
        <Timer style={{ width: 25, marginRight: 6, marginBottom: -6 }} color="inherit" />
        <TimeField
          showSeconds={false}
          value={value ? value : '00:00'}
          onChange={this.handleChange}
          style={{ width: 82, fontSize: 20 }}
          // input={<TextField floatingLabelFixed={true} floatingLabelText="Time" />}
          input={<TextField label="Time" />}
        />
      </div>
    );
  }

  private handleChange = (value: any) => {

  }

}
