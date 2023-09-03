import React, { FC } from 'react';
import Avatar, { AvatarPropsVariantOverrides } from '@mui/material/Avatar';
import { OverridableStringUnion } from '@mui/types';

interface ICustomAvatar {
  variant?: OverridableStringUnion<
    'circular' | 'rounded' | 'square',
    AvatarPropsVariantOverrides
  >;
  src: string;
  width: number;
  height: number;
}

const CustomAvatar: FC<ICustomAvatar> = ({ variant, src, width, height }) => {
  return (
    <Avatar
      variant={variant}
      alt="sofiane "
      src={src}
      sx={{ width: { width }, height: { height } }}
    />
  );
};
export default CustomAvatar;
