import * as React from 'react';
import compose from 'recompose/compose';
import { translate, TranslationFunction } from 'react-i18next';
import { get } from 'lodash';
import {
  Input,
  InputLabel,
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Card,
  CardActions,
  CardContent,
  withWidth,
  Collapse,
  Fade,
} from '@material-ui/core';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import Container from '../Container/Container';
import Map from '../Map/Map';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

type ContactProps = Readonly<{
  t: TranslationFunction;
  classes: WithStyles['classes'];
  width: Breakpoint;
}>;

type ContactFormState = Readonly<{
  name: string;
  phone: string;
  email: string;
  message: string;
}>;

type ContactState = Readonly<{
  messageRequiredError: boolean;
  showFetchSuccess: boolean;
  showFetchFailure: boolean;
  showMap: boolean;
}>;

const styles = (theme: Theme) => ({
  halfHeightMinusHalfNavBar: {
    minHeight: 'calc(50vh - 28px)',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(50vh - 32px)',
    },
  },
});

export class Contact extends React.Component<
  ContactProps,
  ContactState & ContactFormState
> {
  constructor(props: ContactProps) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
      messageRequiredError: false,
      showFetchSuccess: false,
      showFetchFailure: false,
      showMap: false,
    };
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState({ showMap: true });
    }, 300);
  }

  public handleChange = (property: keyof ContactFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      ...this.state,
      [property]: event.target.value,
    });
  };

  public handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    // Validate the text area
    const hasMessageError = this.state.message === '';
    this.setState({ messageRequiredError: hasMessageError });

    if (hasMessageError) {
      return;
    }
    const AWS_PREFIX =
      process.env.REACT_APP_STAGE === 'test' ? 'hjoutysc5k' : '267sder6c7';
    const AWS_STAGE = process.env.REACT_APP_STAGE === 'test' ? 'test' : 'prod';
    const url =
      process.env.REACT_APP_STAGE === 'dev'
        ? '/mock/staticSiteMailer.json'
        : `https://${AWS_PREFIX}.execute-api.eu-west-1.amazonaws.com/${AWS_STAGE}/static-site-mailer`;
    const options =
      process.env.REACT_APP_STAGE === 'dev'
        ? {
            method: 'GET',
          }
        : {
            method: 'POST',
            body: JSON.stringify({
              name: this.state.name,
              phone: this.state.phone,
              email: this.state.email,
              message: this.state.message,
            }),
          };
    // Fetch is supported in all evergreen browsers, but not IE 11 or Opera Mini. Polyfill not added at this time.
    return fetch(url, options)
      .then(data => data.json())
      .then(data => {
        if (get(data, 'message.MessageId')) {
          this.setState({
            showFetchSuccess: true,
          });
        } else {
          this.setState({
            showFetchFailure: true,
          });
        }
      })
      .catch(error => {
        this.setState({
          showFetchFailure: true,
        });
      });
  };

  public render() {
    const { t } = this.props;
    const err = this.state.messageRequiredError ? (
      <FormHelperText id="name-error-text">
        {t('REQUIRED_ERROR')}
      </FormHelperText>
    ) : null;
    const showFetchSuccess = this.state.showFetchSuccess ? (
      <div
        style={{
          backgroundColor: '#33eb91',
          marginTop: '1em',
          padding: '0.8em',
        }}
      >
        {t('FETCH_SUCCESS')}
      </div>
    ) : null;
    const showFetchFailure = this.state.showFetchFailure ? (
      <div
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          marginTop: '1em',
          padding: '0.8em',
        }}
      >
        {t('FETCH_FAILURE')}
      </div>
    ) : null;
    return (
      <section>
        <Container fluid noPadding marginTopNavBar>
          <Collapse in={this.state.showMap}>
            <Map halfHeightMinusHalfNavBar />
          </Collapse>
        </Container>
        <Container className="mt-3">
          <Fade in timeout={2000}>
            <form
              action="https://formspree.io/codestar@ordina.nl"
              method="POST"
              onSubmit={this.handleSubmit}
            >
              <Card className="mb-3">
                <CardContent>
                  <p>{t('INTRO_TEXT')}</p>
                  <div className="row">
                    <div className="col-12 col-md-5">
                      <FormControl fullWidth>
                        <InputLabel htmlFor="name">{t('NAME')}</InputLabel>
                        <Input
                          id="name"
                          name="name"
                          onChange={this.handleChange('name')}
                        />
                      </FormControl>

                      <FormControl fullWidth>
                        <InputLabel htmlFor="phone">{t('PHONE')}</InputLabel>
                        <Input
                          id="phone"
                          name="phone"
                          onChange={this.handleChange('phone')}
                        />
                      </FormControl>

                      <FormControl fullWidth required>
                        <InputLabel htmlFor="email">{t('EMAIL')}</InputLabel>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          onChange={this.handleChange('email')}
                        />
                      </FormControl>
                    </div>
                    <div className="col-12 col-md-7">
                      <FormControl fullWidth required>
                        <TextField
                          error={this.state.messageRequiredError}
                          label={t('MESSAGE')}
                          id="message"
                          name="message"
                          onChange={this.handleChange('message')}
                          multiline
                          rows={6}
                        />
                        {err}
                      </FormControl>
                    </div>
                  </div>
                  {showFetchSuccess}
                  {showFetchFailure}
                </CardContent>
                <CardActions>
                  <Button color="primary" type="submit">
                    {t('SEND')}
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Fade>
        </Container>
      </section>
    );
  }
}

export default compose<ContactProps, {}>(
  withStyles(styles),
  withWidth(),
  translate(['contact'], { wait: true })
)(Contact);
