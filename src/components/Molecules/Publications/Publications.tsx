import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import { createStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import { lifecycle } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import PublicationCard from '../PublicationCard/PublicationCard';

type PropsInner = {
  classes: any;
  t: TranslationFunction;
  publications: any;
}

type PropsOuter = {}

type Props = PropsInner & PropsOuter;

// TODO remove?
const styles = () => createStyles({
  // siteSection: {
  //   backgroundColor: blue[900],
  //   color: grey[200]
  // }
});

// TODO intro text
// TODO implement lambda service
// TODO combine Medium from API and other publications from static JSON
// TODO /blog

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
  const publicationCards = publications.map((p: any) => <PublicationCard key={p.id} data={p}></PublicationCard>);
  return (<>{publicationCards}</>);
};

const withUserData = lifecycle({
  componentDidMount() {
    fetchPublications() // TODO move to services and apply caching
      .then(data => {
        // console.log(data.payload.posts.map((p:any) => p));
        this.setState({ publications: data.payload.posts });
      });
  }
});

export default compose<Props, PropsOuter>(
  withUserData,
  withStyles(styles),
  translate(['about'], { wait: true })
)(Publications);
