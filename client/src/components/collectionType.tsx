import { useState, ReactElement, forwardRef } from 'react';
import { useHistory, Link, LinkProps } from 'react-router-dom';
import { Stack, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import useWindowSize from '../hooks/useWindowSize';

export default function CollectionType(props: {}): ReactElement {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const windowSize = useWindowSize();
    const history = useHistory();
    const theme = useTheme();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Na sztywno => do poprawy
    return (
        <Stack direction='row' spacing={2} sx={{ flexGrow: 24, color: '#fff' }}>
            {windowSize.x >= 1024 && (
                <>
                    <Button
                        variant='contained'
                        component={forwardRef<
                            HTMLAnchorElement,
                            Partial<LinkProps>
                        >((props, ref) => (
                            <Link
                                to='/collection/albums'
                                ref={ref as any}
                                {...props}
                            />
                        ))}
                    >
                        Albumy
                    </Button>
                    <Button
                        color='secondary'
                        component={forwardRef<
                            HTMLAnchorElement,
                            Partial<LinkProps>
                        >((props, ref) => (
                            <Link
                                to='/collection/playlists'
                                ref={ref as any}
                                {...props}
                            />
                        ))}
                    >
                        Playlisty
                    </Button>
                    <Button
                        color='secondary'
                        component={forwardRef<
                            HTMLAnchorElement,
                            Partial<LinkProps>
                        >((props, ref) => (
                            <Link
                                to='/collection/podcasts'
                                ref={ref as any}
                                {...props}
                            />
                        ))}
                    >
                        Podcasty
                    </Button>
                    <Button
                        color='secondary'
                        component={forwardRef<
                            HTMLAnchorElement,
                            Partial<LinkProps>
                        >((props, ref) => (
                            <Link
                                to='/collection/artists'
                                ref={ref as any}
                                {...props}
                            />
                        ))}
                    >
                        Wykonawcy
                    </Button>
                </>
            )}
            {windowSize.x < 1024 && windowSize.x >= 900 && (
                <>
                    <Button variant='contained'>Albumy</Button>
                    <Button color='secondary'>Playlisty</Button>
                    <Button color='secondary'>Podcasty</Button>
                    <Button
                        color='secondary'
                        endIcon={<ArrowDropDownIcon />}
                        onClick={handleMenu}
                    >
                        Więcej
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ mt: 1 }}
                    >
                        <Button color='secondary'>Wykonawcy</Button>
                    </Menu>
                </>
            )}
            {windowSize.x < 900 && (
                <>
                    <Button variant='contained'>Albumy</Button>
                    <Button color='secondary'>Playlisty</Button>
                    <Button
                        color='secondary'
                        endIcon={<ArrowDropDownIcon />}
                        onClick={handleMenu}
                    >
                        Więcej
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{ mt: 1 }}
                    >
                        <MenuItem>
                            <Button color='secondary'>Podcasty</Button>
                        </MenuItem>
                        <MenuItem>
                            <Button color='secondary'>Wykonawcy</Button>
                        </MenuItem>
                    </Menu>
                </>
            )}
        </Stack>
    );
}