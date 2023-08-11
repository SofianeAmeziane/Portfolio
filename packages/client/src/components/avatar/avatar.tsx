import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';

interface ICustomAvatar {
  src: string;
  width: number;
  height: number;
}

const CustomAvatar: FC<ICustomAvatar> = ({ src, width, height }) => {
  return (
    <Avatar
      alt="sofiane "
      src={src}
      sx={{ width: { width }, height: { height } }}
    />
  );
};
export default CustomAvatar;
