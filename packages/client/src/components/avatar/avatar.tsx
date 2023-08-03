import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function CustomAvatar({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) {
  return (
    <Avatar
      alt="sofiane "
      src={src}
      sx={{ width: { width }, height: { height } }}
    />
  );
}
