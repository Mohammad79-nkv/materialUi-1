import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: "grey",
        height:"100vh",

    }
}))

const Leftbar = () => {
    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <div>leftbar</div>
            <div>leftbar</div>
            <div>leftbar</div>
            <div>leftbar</div>
            <div>leftbar</div>
            <div>leftbar</div>
            <div>leftbar</div>
            <div>leftbar</div>
            <div>leftbar</div>
        </Container>
     );
}
 
export default Leftbar;