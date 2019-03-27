import React, { FC } from 'react';
import { translate, TranslationFunction } from 'react-i18next';
import compose from 'recompose/compose';
import { lifecycle } from 'recompose';
import PublicationCard from '../PublicationCard/PublicationCard';
import { getCachedPublications, IPublication } from "../../../publicationsService";

type PropsInner = {
  t: TranslationFunction;
  publications: IPublication[];
}

type PropsOuter = {}

type Props = PropsInner & PropsOuter;

// TODO intro text above publications incl translations
// TODO combine Medium from API and other publications from static JSON
// TODO /blog

export const Publications: FC<Props> = ({publications = []}) => {
  const publicationCards = publications.map((p) => <PublicationCard key={p.id} publication={p}></PublicationCard>);
  return (<>{publicationCards}</>);
};

const withUserData = lifecycle({
  async componentDidMount() {
    try {
      const publications = await getCachedPublications();
      this.setState({ publications });
    } catch (err) {
      // TODO
      console.error(err);
    }
  }
});

export default compose<Props, PropsOuter>(
  withUserData,
  translate(['about'], { wait: true })
)(Publications);
