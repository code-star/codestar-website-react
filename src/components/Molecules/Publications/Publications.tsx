import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { createStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import { lifecycle } from 'recompose';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
// import Section from '../../Molecules/Section/Section';
import { withStyles } from '@material-ui/core/styles';
import PublicationCard from '../PublicationCard/PublicationCard';

type PropsInner = {
  classes: any;
  t: TranslationFunction;
  publications: any;
}

type PropsOuter = {}

type Props = PropsInner & PropsOuter;

// TODO clean up
const styles = () => createStyles({
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

async function fetchPublications(): Promise<any> {
  try {
    const url = '/mock/publications.json';
    // cachedUpcomingEvents = await fetch(url).then(data => data.json());
    // return cachedUpcomingEvents;
    return await fetch(url).then(data => data.json());
  } catch (err) {
    // fail silently
    return [];
  }
}

export const Publications: FC<Props> = ({publications = []}) => {
  // let publications = [{
  //   id: "c3237f93f12b",
  //   title: "abc"
  // }, {
  //   id: "c3237f93f12b1",
  //   title: "abc1"
  // }, {
  //   id: "c3237f93f12b2",
  //   title: "abc2"
  // }];
  // fetchPublications() // TODO
  //   .then(data => {
  //     console.log(data.payload.posts.map((p:any) => p));
  //     publications = data.payload.posts;
  //   });
  const publicationCards = publications.map((p: any) => <PublicationCard key={p.id} data={p}></PublicationCard>);
  return (<>{publicationCards}</>);
};

// export const initialState = { publications: [] };
// export const stateUpdaters = {
//   // Example of state argument with typing: handleMouseOver: ({ isHovering } : { isHovering: boolean}) => () => ({ isHovering: true }),
//   handleMouseOver: () => () => ({ isHovering: true }),
//   handleMouseOut: () => () => ({ isHovering: false }),
// };

const withUserData = lifecycle({
  // state: { data: [] },
  componentDidMount() {
    fetchPublications() // TODO
      .then(data => {
        console.log(data.payload.posts.map((p:any) => p));
        // publications = data.payload.posts;
        this.setState({ publications: data.payload.posts });
      });
    // fetchData().then((data) =>
    //   this.setState({ loading: false, ...data }));
  }
});

export default compose<Props, PropsOuter>(
  // withStateHandlers(initialState, stateUpdaters),
  withUserData,
  withStyles(styles),
  translate(['about'], { wait: true })
)(Publications);
