import { Container, makeStyles, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    right: "0",
    width: "25%",
    paddingTop: theme.spacing(10),
    paddingLeft: "0",
    paddingRight: "0",
    backgroundColor: "white",
    color: "black",
    height: "100vh",
    // zIndex: "-10",
    [theme.breakpoints.down("xs")]: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        width: "16.666%"
      },
  },
  item: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
    cursor: "pointer",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    transition: "all 0.2s ease-in-out ",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      paddingRight: "0",
    },
    '&:hover': {
      backgroundColor: "rgba(144, 202, 249, 0.5)",
      color: "rgba(255, 255, 255, 1)"
    }
  },
  text: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "16px",
      },
  },
  icon: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
}));

const Rightbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>خانه</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>دوستان</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>لیست ها</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>دوربین</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>ویدئو</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>اپ</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>مجموعه ها</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>بازار</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>تنظیمات</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>خروج</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>خانه</Typography>
      </div>
    </Container>
  );
};

export default Rightbar;
