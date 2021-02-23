import React, { FC } from 'react';
// import "./App.css";
import {
  // Container,
  // ThemeProvider,
  List,
  Grid,
  Typography,
  Link,
  LinearProgress,
} from '@material-ui/core';
import ErrorCard from './ErrorCard';
import BoardCard from './BoardCard';
import useLeaderboard from "../../../hooks/useLeaderboard";
// import theme from "./theme";
import EntryListItem from './EntryListItem';
import EntryListHeader from './EntryListHeader';
import ShareBanner from './ShareBanner/ShareBanner';

const Leaderboard: FC = () => {
  const { entries, isLoading, error } = useLeaderboard();

  const entryListItems = entries.map((entry, index) => (
    <EntryListItem key={entry.name} index={index + 1} entry={entry} />
  ));

  return (
    // <ThemeProvider theme={theme}>
    // <Container maxWidth="sm" style={{ height: "100%" }}>
    <Grid
      container
      direction="column"
      // spacing={4}
      // Reset marginTop to prevent not full height
      // style={{ height: '100%', marginTop: 0 }}
      wrap="nowrap"
    >
      {error && (
        <Grid item>
          <ErrorCard
            errorMessage={error.errorMessage}
            technicalMessage={error.technicalMessage}
          />
        </Grid>
      )}
      <Grid item>
        <BoardCard>
          <Typography>
            Try out the Freelancer challenge and see your high score here.{' '}
            <Link href="./Freelancer.pdf">More info in this PDF</Link>.
          </Typography>
          <ShareBanner />
          {isLoading ? (
            <LinearProgress title="Loading new high scores..." />
          ) : (
            <div style={{ height: '4px' }} />
          )}
          <List>
            <EntryListHeader />
            {entryListItems}
          </List>
        </BoardCard>
      </Grid>
    </Grid>
    // </Container>
    // </ThemeProvider>
  );
};

export default Leaderboard;
