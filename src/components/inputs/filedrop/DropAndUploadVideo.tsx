/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import DropAndUploadFile, { IDropAndUploadFileProps } from './DropAndUploadFile';

type TDropAndUploadVideoProps = NUtil.Omit<IDropAndUploadFileProps,'validation'>;

const DropAndUploadVideo: React.SFC<TDropAndUploadVideoProps> = props => (
  <DropAndUploadFile {...props} validation={['video']} />
);

export default DropAndUploadVideo;