import { AppBar, IconButton, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";



const useStyles = makeStyles((theme) => ({
  navHeader1: {
    display: "block",
    color: "#131A20",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  navHeader2: {
    display: "none",
    color: "#131A20",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  navBarSearch : {
    width: "50%",
    color: "#131A20",
    backgroundColor: "#A1D2FA",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")] : {
      display: (props) => (props.openSearch ? "flex": "none"),
    }
  },
  inputSearch: {
    width: "100%"
  },
  navBar: {
    backgroundColor: "#90CAF9",
    display: "flex",
    justifyContent: "space-between"
  },
  navBarIcon : {
    color: "#131A20",
  },
  searchIcon : {
    color: "black",
    // display: (props) => (props.openSearch ? "none" : "flex"),
    display: "none",
    [theme.breakpoints.down("xs")] : {
      display: (props) => (props.openSearch ? "none" : "flex")
    }
  },
  closeIcon : {
    [theme.breakpoints.up("sm")] : {
      display: "none"
    }
  }
}));

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const classes = useStyles({openSearch});
  return (
    <div className="navbar">
      <AppBar>
        <Toolbar className={classes.navBar}>
          <div className="nav-title">
            <Typography variant="h6" className={classes.navHeader1}>
              سایت اخبار
            </Typography>
            <Typography variant="h6" className={classes.navHeader2}>
              اخبار
            </Typography>
          </div>
          <div className={classes.navBarSearch}>
            <SearchIcon/>
            <InputBase className={classes.inputSearch} placeholder ="جستجو کنید..."/>
            <CloseIcon className={classes.closeIcon} onClick={()=> setOpenSearch(false)}/>
          </div>
          <SearchIcon className={classes.searchIcon} onClick={() => setOpenSearch(true)}/>
          <IconButton>
          <MenuIcon className={classes.navBarIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
