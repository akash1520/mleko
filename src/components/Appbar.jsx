import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';






export default function Appbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Home</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Specialty coffee house</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Menu</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Coffee and Subscription</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Shop</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Sustainability</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Events</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={"new"} color="error">
                        <LocalOfferIcon />
                    </Badge>
                </IconButton>
                <p>Offers</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }} className="bar">
            <AppBar position="static">
                <Toolbar className='menuu'>

                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <img width={"70px"} src="https://static.wixstatic.com/media/f306c3_ad9b9f5c7344404fbd78370cc20edb91~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Submark.png" />
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <a style={{ marginRight: "2em" }}>Home</a>
                        </Typography>
                        <Typography
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <a style={{ marginRight: "2em" }}>Home</a>
                        </Typography>
                        <Typography
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <a style={{ marginRight: "2em" }}>Home</a>
                        </Typography>
                        <Typography
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <a style={{ marginRight: "2em" }}>Home</a>
                        </Typography>
                        <Typography
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <a style={{ marginRight: "2em" }}>Home</a>
                        </Typography>
                        <Typography
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <a style={{ marginRight: "2em" }}>Home</a>
                        </Typography>
                        <Typography
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <a style={{ marginRight: "2em" }}>Home</a>
                        </Typography>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>



                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
