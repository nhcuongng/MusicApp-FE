import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR_PALETTE, SPACING} from '../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';

type TBottomBarProps = {};

const BottomBar = (props: TBottomBarProps) => {
  const styleActive = {color: COLOR_PALETTE.PRIMARY};

  return (
    <View style={styles.bottomBarWrapper}>
      <View style={[styles.item]}>
        <Icon style={styleActive} name="home" size={20} />
        <Text style={[styles.titleMenuBar, styleActive]}>Home</Text>
      </View>
      <View style={styles.item}>
        <Icon name="list-sharp" size={20} />
        <Text style={styles.titleMenuBar}>Library</Text>
      </View>
      <View style={styles.item}>
        <Icon name="search-sharp" size={20} />
        <Text style={styles.titleMenuBar}>Search</Text>
      </View>
      <View style={styles.item}>
        <Icon name="person-sharp" size={20} />
        <Text style={styles.titleMenuBar}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarWrapper: {
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: SPACING.S_3,
    padding: SPACING.S_4,
  },
  titleMenuBar: {
    fontSize: 16,
  },
});

export default BottomBar;
