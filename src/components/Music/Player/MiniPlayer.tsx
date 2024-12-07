import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../container';
import {COLOR_PALETTE, SPACING} from '../../../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';

type TMiniPlayerProps = {};

const MiniPlayer = (props: TMiniPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Container>
      <View style={styles.miniPlayerWrapper}>
        <View style={styles.songInfo}>
          <Image
            style={styles.imageThumb}
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
          />
          <View style={styles.content}>
            <Text>{'Song name'}</Text>
          </View>
        </View>
        <View style={styles.songPlayer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Icon size={18} name="play-back" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPlaying(prev => !prev)}>
            <View style={styles.button}>
              {isPlaying ? (
                <Icon size={18} name="pause-sharp" />
              ) : (
                <Icon size={18} name="play-sharp" />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Icon size={18} name="play-forward" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  miniPlayerWrapper: {
    flexDirection: 'row',
    backgroundColor: COLOR_PALETTE.ORANGE_THIN,
    padding: SPACING.S_3,
    borderRadius: 8,
  },
  imageThumb: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    padding: SPACING.S_2,
    justifyContent: 'center',
  },
  songInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  songPlayer: {
    flexDirection: 'row',
    gap: SPACING.S_3,
  },
  button: {
    padding: SPACING.S_3,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    aspectRatio: 1,
  },
});

export default MiniPlayer;
