import React, { FC } from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import codestarLogo from "./codestar.svg";
import ordinaLogo from "./ordina.svg";
// https://github.com/edent/SuperTinyIcons/
import githubIcon from "./github.svg";
import linkedinIcon from "./linkedin.svg";
import mediumIcon from "./medium.svg";
import meetupIcon from "./meetup.svg";
import youtubeIcon from "./youtube.svg";

// TODO needs Twitter

const ShareBanner: FC = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography align="center">Made by</Typography>{" "}
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img
              alt="Codestar - Passionate programmers. Powered by Ordina"
              src={codestarLogo}
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography align="center">Powered by</Typography>{" "}
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img alt="Ahead of change" src={ordinaLogo} />
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={8} justify="center">
        <Grid item xs={1}>
          <Link href="https://github.com/code-star">
            <img alt="Codestar on Github" src={githubIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.linkedin.com/company/codestar-powered-by-ordina">
            <img alt="Codestar on LinkedIn" src={linkedinIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://medium.com/codestar-blog">
            <img alt="Codestar on Medium" src={mediumIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.meetup.com/Codestar-Night/">
            <img alt="Codestar on Meetup" src={meetupIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.youtube.com/c/codestar">
            <img alt="Codestar on Youtube" src={youtubeIcon} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShareBanner;
