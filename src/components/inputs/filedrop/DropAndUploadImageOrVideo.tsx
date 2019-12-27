/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import DropAndUploadFile, { IDropAndUploadFileProps } from './DropAndUploadFile';

type TDropAndUploadImageOrVideoProps = NUtil.Omit<IDropAndUploadFileProps,'validation'>;

const DropAndUploadImageOrVideo: React.SFC<TDropAndUploadImageOrVideoProps> = props => (
  <DropAndUploadFile {...props} validation={['image','video']} />
);

export default DropAndUploadImageOrVideo;