import { Box, IconButton } from '@mui/material';
import React, { MutableRefObject, FC, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { LanguagePopover } from '../../languagePopover';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

interface IHumbergerMenu {
  scrollToAbout: MutableRefObject<HTMLDivElement | null>;
  scrollToSkills: MutableRefObject<HTMLDivElement | null>;
  scrollToPortfolio: MutableRefObject<HTMLDivElement | null>;
  scrollToContactMe: MutableRefObject<HTMLDivElement | null>;
  handleScrollSection: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}

export const HumbergerMenu: FC<IHumbergerMenu> = ({
  scrollToAbout,
  scrollToSkills,
  scrollToPortfolio,
  scrollToContactMe,
  handleScrollSection,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const handleSelectMenuItem = (
    event: Event | React.SyntheticEvent,
    section: MutableRefObject<HTMLDivElement | null>,
  ) => {
    handleClose(event);
    handleScrollSection(section);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Box display={{ xs: 'flex', md: 'none' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleToggle}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem sx={{ display: 'flex', justifyContent: 'center' }}>
                    <LanguagePopover />
                  </MenuItem>
                  <MenuItem
                    onClick={(event) =>
                      handleSelectMenuItem(event, scrollToAbout)
                    }
                  >
                    {t('navBar:aboutMe')}
                  </MenuItem>
                  <MenuItem
                    onClick={(event) =>
                      handleSelectMenuItem(event, scrollToSkills)
                    }
                  >
                    {t('navBar:skills')}
                  </MenuItem>{' '}
                  <MenuItem
                    onClick={(event) =>
                      handleSelectMenuItem(event, scrollToPortfolio)
                    }
                  >
                    {t('navBar:portfolio')}
                  </MenuItem>{' '}
                  <MenuItem
                    onClick={(event) =>
                      handleSelectMenuItem(event, scrollToContactMe)
                    }
                  >
                    {t('navBar:contactMe')}
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
