import React from 'react';
import {
  compose,
  pure,
  withProps,
} from 'recompose';
import { withRouter } from 'react-router';

const hoc = compose(
  withRouter,
  withProps(({location}) => ({
    isHome: location.pathname === '/',
  })),
  pure
);

const page = PageComponent =>
  hoc(({isHome, ...rest}) => (
    <PageComponent isHome={isHome} {...rest} />
  ));

export default page;
