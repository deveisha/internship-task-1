import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addItemQuantity, subtractItemQuantity } from "../store/CartSlice";
import { useState } from "react";
import { Badge } from "@mui/material";
const drawerWidth = 240;
const navItems = ["Shop", "pages", "Blog", "contact"];
function DrawerAppBar(props) {
  const { window } = props;
  const dispatch=useDispatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerOpen, setdrawerOpen] = React.useState(false);
  const[cartBox,setCartBox]=useState(false)
  const { quantity,CartProducts}   = useSelector((state) => state.cart);
  const cartQuantity = CartProducts.length;

  const cartTotal = CartProducts.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);



const handleIncrement = (itemId) => {
  dispatch(addItemQuantity(itemId));
};

const handleDecrement = (itemId) => {
  dispatch(subtractItemQuantity(itemId));
};
  console.log(CartProducts);
  const handleClose = () => {
    setdrawerOpen(!drawerOpen);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  function TemporaryDrawer() {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 6 }}>
        Essence
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
 
  return (
    <>
      <Box sx={{ display: "flex", height: "10px" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            >
              Essence
            </Typography>

            <Drawer
              anchor={"right"}
              open={drawerOpen}
              onClose={handleClose}
              className="abc"
            >
              <Box
                sx={{
                  width: { xl: "700px", sm: "500px", md: "600px", xs: "200px" },
                  height: "300px",
                  display: "flex",
                  padding: "74px",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: "30px",
                    left: {xl:"300px",xs:'70px',sm:'100px',md:'120px'},
                    fontSize: "34px",
                    fontWeight: "bolder",
                    color: "red",
                  }}
                >
                  CART{" "}
                </Typography>

                  <Box sx={{ padding: "22px" }}>
                  {CartProducts?.map((products,id)=>{
                     const itemTotal = products.price * quantity
                     return(
                    <>
                    <Box
                     
                      sx={{
                        height: {
                          xl: "150px",
                          md: "120px",
                          sm: "100px",
                          xs: "100px",
                        },
                        width: {
                          xl: "150px",
                          sm: "120px",
                          md: "100px",
                          xs: "100px",
                        },
                        justifyContent: "center",
                      }}
                    >
                     
                        
                     
                      <img src={products.image} alt="" />{" "}
                    </Box>{" "}
                    <br /> <br />
                    <h5>{products.title}</h5>
                    <h5>{products.price}$</h5>
                    <Button onClick={() => handleDecrement(products)}>
                      -
 </Button>
                    <p>{products.quantity}</p>
                    <Button onClick={() => handleIncrement(products)} >
                      +
                    </Button>
                    <Button
                      sx={{ backgroundColor: "lightgreen" }}
                      onClick={() => dispatch(removeFromCart(products.id))}
                    >
                      {" "}
                      Remove{" "}
                    </Button>{" "}

                   
                   
                    </>
                     )
                    })
                  }
                  <br />
                <Button sx={{marginTop:{xl:'5%',xs:'2%'},}}>
                    total:$ {cartTotal.toLocaleString()}
               </Button>
                    <br /> <br />
                    <Button
                     disabled={quantity === 0}
                  sx={{
                    backgroundColor: "cyan",
                    padding: {xl:"10px",xs:'10px'},
                    fontSize: "16px",
                    display:'flex',
                    left:{xl:'50%',xs:'0'},
                    right:'50%'
                  }}
                >
                  Checkout
                </Button>
                  </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: { xl: "600px", sm: "500px", md: "400px", xs: "300px" },
                  left: { xl: "290px", sm: "250px", md: "200px", xs: "160px" },
                }}
              >
               
              </Box>
            </Drawer>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "black" }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <FavoriteIcon
              sx={{
                height: "40px",
                width: "40px",
                border: "2px black",
                color: "grey",
                cursor: "pointer",
              }}
            />
            <PersonIcon
              sx={{
                height: "40px",
                width: "40px",
                color: "grey",
                cursor: "pointer",
              }}
            />
            <ShoppingBagIcon
              onClick={() => {
                setdrawerOpen(true);
              }}
              sx={{
                height: "40px",
                width: "40px",
                color: "grey",
                cursor: "pointer",
              }}
            />
            <Badge badgeContent={quantity} color="primary">
            </Badge>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box>
      </Box>
    </>
  );
}

export default DrawerAppBar;
