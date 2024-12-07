import React from 'react';
import {MusicItem} from '../../@types/music.type';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SPACING} from '../../constants/styles';

type TSongItemProps = {
  item: MusicItem;
};

const SongItem = ({item}: TSongItemProps) => {
  const {artist, name} = item;

  return (
    <View style={styles.item}>
      <Image
        style={styles.imageThumb}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <View style={styles.content}>
        <Text>{name}</Text>
        <Text>{artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
  },
  imageThumb: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    padding: SPACING.S_2,
    gap: SPACING.S_2,
  },
});

export default SongItem;
