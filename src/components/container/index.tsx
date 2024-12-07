import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {SPACING} from '../../constants/styles';

type TContainerProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  headerStyles?: object;
};

const Container = ({children, header, headerStyles}: TContainerProps) => {
  return (
    <SafeAreaView>
      {header ? (
        <View style={[styles.header, headerStyles]}>{header}</View>
      ) : null}
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.S_4,
    paddingVertical: SPACING.S_4,
  },
  header: {
    paddingHorizontal: SPACING.S_4,
    paddingTop: SPACING.S_4,
    paddingBottom: SPACING.S_8,
  },
});

export default Container;
