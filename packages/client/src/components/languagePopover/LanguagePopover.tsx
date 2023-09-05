import React, { useState } from 'react';
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LANGS from './langs.json';

export const LanguagePopover = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<null>(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleCLickSwapLanguage = (selectValue: string) => {
    handleClose();
    if (selectValue !== i18n.language) {
      i18n.changeLanguage(selectValue);
    }
    return;
  };

  const langDetailFind = LANGS.find((lang) => lang.value === i18n.language);
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
        }}
      >
        <img src={langDetailFind?.icon} alt={langDetailFind?.label} />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={() => handleCLickSwapLanguage(option.value)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};
