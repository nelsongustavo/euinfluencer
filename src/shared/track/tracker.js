import React from 'react';
import ga from 'react-ga';
import leadTracker from './lead-tracker';
import ReactPixel from 'react-facebook-pixel';

ReactPixel.init('498312307210725');
ga.initialize('UA-102606035-1');

const tracker = (WrappedComponent) => {

  const trackPage = (page) => {
    ga.set({ page });
    ga.pageview(page);
    ReactPixel.pageView();
    leadTracker(page);
  };

  const HOC = (props) => {
    if (process.env.NODE_ENV === 'production') {
      const page = props.location.pathname;
      trackPage(page);
    }

    return (
      <WrappedComponent {...props} />
    );
  };
  return HOC;
};

export default tracker;
