import React from 'react';
import {MusicItem} from '../../@types/music.type';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR_PALETTE, SPACING} from '../../constants/styles';
import SongItem from './SongItem';
import Icon from 'react-native-vector-icons/Ionicons';

type TListProps = {
  title: string;
  songs: MusicItem[];
};

const List = (props: TListProps) => {
  const {songs, title} = props;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={{marginBottom: SPACING.S_4, marginTop: SPACING.S_8}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Icon name="musical-notes" style={styles.title} />
          </View>
          {songs.length > 5 ? (
            <View style={styles.seeMoreWrapper}>
              <Text style={styles.seeMore}>See more</Text>
            </View>
          ) : null}
        </View>
        {songs.slice(0, 5).map(item => (
          <SongItem item={item} />
        ))}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: SPACING.S_6,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: SPACING.S_3,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: COLOR_PALETTE.PRIMARY,
  },
  seeMoreWrapper: {
    // alignItems: 'flex-end',
  },
  seeMore: {
    color: COLOR_PALETTE.BLUE_LINK,
  },
});

export default List;
