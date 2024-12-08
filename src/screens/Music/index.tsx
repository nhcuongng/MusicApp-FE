import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BottomBar from '../../components/BottomBar';
import {TAB_LIST} from '../../constants/music';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Container from '../../components/container';
import MiniPlayer from '../../components/Music/Player/MiniPlayer';
import {useMusicStore} from '../../store/music';

const Music = () => {
  const tab = useMusicStore(state => state.tab);

  const activeTabComponent = useMemo(() => {
    const active = TAB_LIST.find(({key}) => key === tab);

    if (!active) {
      return <Text>Can not found the screen</Text>;
    }

    return React.createElement(active.component);
  }, [tab]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.tabContent}>
            <Container>{activeTabComponent}</Container>
          </View>
        </ScrollView>
        <MiniPlayer />
        <BottomBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Music;
