import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(100),
    },
  },
}));

const AboutMe = () => {
      const classes = useStyles();

      return (
            <div className={classes.root}>
                  <Paper elevation={5}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at imperdiet quam. Suspendisse maximus ornare convallis. Quisque feugiat nisi ut felis feugiat tempus. Curabitur sed mi elementum mi laoreet euismod in eget augue. Sed posuere augue sit amet purus pellentesque, ut sodales mauris cursus. Nunc tempor sem convallis mi laoreet, nec tempor mauris luctus. Sed purus justo, iaculis ut bibendum non, auctor sed velit. Nam aliquam urna in felis sollicitudin, ac posuere dui fermentum. Donec tristique nec erat vitae ornare. Suspendisse nec lorem ac est ullamcorper lobortis et id sem. Sed porttitor tortor non eros auctor facilisis. Morbi eleifend mi justo, eget efficitur dolor iaculis in. Suspendisse mollis posuere porta. </p>

<p>Integer felis eros, varius eget iaculis finibus, elementum vitae velit. Curabitur faucibus efficitur mi quis porttitor. Pellentesque suscipit velit eros, sit amet cursus mi pulvinar eu. Vivamus ut enim vitae sapien dictum suscipit id nec mi. Donec fermentum est ligula, vel placerat quam finibus non. Duis placerat at felis sit amet lobortis. Quisque accumsan tempus sem, et bibendum ligula porttitor ac. Fusce at efficitur ante. Vivamus aliquet turpis libero, vitae varius neque condimentum vel. Cras eget pellentesque ex. Aliquam eu tempus est.</p>

<p>Ut porttitor tristique quam, non aliquam lectus pharetra non. Donec in ex ex. Quisque dignissim leo vel diam dictum, id maximus sem ultricies. Vestibulum malesuada volutpat orci vel congue. Nunc condimentum, quam sit amet dapibus pharetra, elit nisi rhoncus justo, et egestas nibh nibh eu urna. Mauris pellentesque magna quis dolor aliquet, eget tempor lorem lobortis. Sed cursus ac lorem et convallis. Suspendisse sed dui iaculis, molestie nisl id, bibendum nibh. Duis varius porttitor erat ac congue. Praesent leo massa, pretium a scelerisque a, vehicula lacinia turpis. Suspendisse posuere risus sit amet neque lobortis tristique. Donec tortor risus, viverra non ipsum ac, aliquet pulvinar sem. Integer in convallis ex, ac rhoncus justo.</p>
                  </Paper>

            </div>
      )

}

export default AboutMe;