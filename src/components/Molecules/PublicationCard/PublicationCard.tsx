import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import {Theme, Typography, createStyles, CardContent, Card} from '@material-ui/core';
import compose from 'recompose/compose';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
// import Section from '../../Molecules/Section/Section';
import { withStyles } from '@material-ui/core/styles';
// import {getResponsiveImageUrl} from "../../../ResponsiveImage/ResponsiveImage";

type PropsInner = {
  classes: any;
  t: TranslationFunction;
}

type PropsOuter = {
  data: any;
}

type Props = PropsInner & PropsOuter;

const styles = (theme: Theme) => createStyles({
  text: {
    color: 'white',
    "&& h2": {
      fontSize: "2rem",
      fontWeight: 500
    }
  },
  teamSection: {
    backgroundColor: grey[200]
  },
  siteSection: {
    backgroundColor: blue[900],
    color: grey[200]
  }
});

// export const PublicationCard: FC<IPropsInner> = ({ t, classes, data }) => {
//   return (
//     <Card key={data} className={`${styles.card} my-3`}>
//       <CardMedia
//         className={styles.cardMedia}
//         image={getResponsiveImageUrl(
//           `/images/team/${person.image}`,
//           cardWidth * 2,
//           'e_grayscale/co_rgb:0057ae,e_colorize:40'
//         )}
//         title={person.name}
//       />
//       <CardContent>
//         <Typography variant="headline" component="h3">
//           {data}
//         </Typography>
//         <Typography
//           style={{ marginBottom: 16, fontSize: 14 }}
//           color="textSecondary"
//         >
//           {person.job}
//         </Typography>
//         <Typography component="i">{person.tagline}</Typography>
//       </CardContent>
//     </Card>
//   );
// };

export const PublicationCard: FC<Props> = ({ t, classes, data }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="headline" component="h3">
          {data.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default compose<Props, PropsOuter>(
  withStyles(styles),
  translate(['about'], { wait: true })
)(PublicationCard);
