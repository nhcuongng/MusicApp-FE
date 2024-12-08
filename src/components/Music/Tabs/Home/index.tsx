import React from 'react';
import List from '../../List';
import {MUSIC_LIST} from '../../../../constants/music';

type THomeProps = {};

const Home = (props: THomeProps) => {
  return (
    <React.Fragment>
      <List songs={MUSIC_LIST} title="Recent" />
      <List songs={MUSIC_LIST} title="Favorite" />
      <List songs={MUSIC_LIST} title="The most play time" />
    </React.Fragment>
  );
};

export default Home;
