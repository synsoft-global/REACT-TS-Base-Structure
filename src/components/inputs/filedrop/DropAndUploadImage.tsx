/*
 * Created on Sun Dec 23 2018
 *
 * Copyright (c) 2019 Synsoft Global
 */

import * as React from 'react';

import DropAndUploadFile, { IDropAndUploadFileProps } from './DropAndUploadFile';

type TDropAndUploadImageProps = NUtil.Omit<IDropAndUploadFileProps, 'validation'>;

const DropAndUploadImage: React.SFC<TDropAndUploadImageProps> = props => (
  <DropAndUploadFile {...props} validation={['image']} />
);

export default DropAndUploadImage;
