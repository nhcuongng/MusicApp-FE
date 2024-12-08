import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR_PALETTE, SPACING} from '../constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMusicStore} from '../store/music';
import {TAB_LIST} from '../constants/music';

const BottomBar = () => {
  const {changeTab, tab} = useMusicStore();

  const tabList = useMemo(() => {
    return TAB_LIST.map(({icon, label, key}) => {
      const styleActive =
        tab === key
          ? {
              color: COLOR_PALETTE.PRIMARY,
              border: '1',
            }
          : {};
      return (
        <TouchableOpacity
          onPress={() => changeTab(key)}
          style={[styles.item]}
          key={key}>
          <Icon style={styleActive} name={icon} size={20} />
          <Text style={[styles.titleMenuBar, styleActive]}>{label}</Text>
        </TouchableOpacity>
      );
    });
  }, [tab, changeTab]);

  return <View style={styles.bottomBarWrapper}>{tabList}</View>;
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
