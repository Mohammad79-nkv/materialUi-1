import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 140,
    },
    card : {
        marginBottom: theme.spacing(3)
    }
}))

const Post = () => {
    const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image="https://images.pexels.com/photos/4185957/pexels-photo-4185957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            کووید 19
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        اشتراک گذاری
        </Button>
        <Button size="small" color="primary">
          ادامه مطلب
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
