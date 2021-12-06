import { Grid, makeStyles } from "@material-ui/core";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

const useStyles = makeStyles((theme)=> ({
  leftBar: {
    [theme.breakpoints.down("xs")]:{
      display: "none"
    }
  },
  gridRight: {
    // position: "fixed",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.primary.main,
    },
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <Navbar/>
      <Grid container>
        <Grid className={classes.gridRight} item sm={3} xs={2} >
          <Rightbar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed/>
        </Grid>
        <Grid item sm={2} className={classes.leftBar}>
          <Leftbar/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
