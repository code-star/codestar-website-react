import React, { SFC } from 'react';
import Container from '../../../../Container/Container';
import Section from '../../Section/Section';
import { translate, TranslationFunction } from 'react-i18next';
import EventsHeader from '../../../Organisms/EventsHeader/EventsHeader';
import EventCard from '../../../../EventCard/EventCard';
import compose from 'recompose/compose';
import {
  IMeetupEvent,
  ITweet,
  ITwitterUser,
} from '../../../../containers/EventsContainer/EventsContainer.interfaces';
import { NextEventsBlock } from './NextEventsBlock';
import TrainingsSection from '../../TrainingsSection/TrainingsSection';
import { VideoItem } from '../../../../containers/EventsContainer/fetchYouTubePlaylist';
import VideosSection from '../../VideosSection/VideosSection';

/*
 Suggestions for design concepts
 https://www.pixel-stitch.net/
 https://hencework.com/theme/mateve/music_concert/#
 https://colorlib.com/wp/free-event-website-templates/
*/

interface IEventInnerProps {
  t: TranslationFunction;
}

interface IEventOuterProps {
  nextMeetupEvents: IMeetupEvent[];
  noNextMeetupEvent: boolean;
  pastMeetupEvents: IMeetupEvent[];
  recentTweets: { data: ITweet[]; author: ITwitterUser } | null;
  videos: VideoItem[];
}

const Events: SFC<IEventInnerProps & IEventOuterProps> = ({
  t,
  nextMeetupEvents,
  noNextMeetupEvent,
  pastMeetupEvents,
  recentTweets,
  videos,
}) => {
  const pastEventsList = pastMeetupEvents.map((mEvent: IMeetupEvent) => (
    <EventCard key={mEvent.time} event={mEvent} />
  ));
  return (
    <>
      <EventsHeader
        nextMeetupEvents={nextMeetupEvents}
        noNextMeetupEvent={noNextMeetupEvent}
        tweets={recentTweets}
      />
      <Section scrollname="previous-events">
        <Container>
          <NextEventsBlock
            events={nextMeetupEvents}
            nextEventsTitle={t('OUR_NEXT_EVENTS')}
          />
          <h2 className="text-white">{t('OUR_PREVIOUS_EVENTS')}</h2>
          <div className="row">
            <div className="d-flex flex-wrap">{pastEventsList}</div>
          </div>
        </Container>
      </Section>
      <VideosSection scrollname="videos" videos={videos} />
      <TrainingsSection scrollname="trainings" />
    </>
  );
};

export default compose<IEventInnerProps & IEventOuterProps, IEventOuterProps>(
  translate(['events'], { wait: true })
)(Events);
