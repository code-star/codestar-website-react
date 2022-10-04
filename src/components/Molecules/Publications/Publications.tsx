import { LinearProgress } from '@material-ui/core';
import React, { FC } from 'react';
import { lifecycle } from 'recompose';
import compose from 'recompose/compose';
import {
  getCachedPublications,
  IPublication,
} from '../../../publicationsService';
import PublicationCard from '../PublicationCard/PublicationCard';

type PropsInner = {
  publications: IPublication[];
};

type PropsOuter = {};

type Props = PropsInner & PropsOuter;

export const Publications: FC<Props> = ({ publications = [] }) => {
  const publicationCards = publications.map(p => (
    <PublicationCard key={p.id} publication={p} />
  ));
  if (publications.length === 0) {
    return <LinearProgress />;
  }
  return <>{publicationCards}</>;
};

const withUserData = lifecycle({
  async componentDidMount() {
    try {
      const publications = await getCachedPublications();
      this.setState({ publications });
    } catch (err) {
      console.warn("Can't set publications, failing silently.");
    }
  },
});

export default compose<Props, PropsOuter>(withUserData)(Publications);
