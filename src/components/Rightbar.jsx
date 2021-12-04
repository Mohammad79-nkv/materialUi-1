import { Container, makeStyles, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: "white",
    color: "black",
    height: "100vh",
    
    [theme.breakpoints.down("xs")]: {
        backgroundColor: theme.palette.primary.main,
        color: "white"
      },
  },
  item: {
    display: "flex",
    alignItems: "center",
    // color: "white",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
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
