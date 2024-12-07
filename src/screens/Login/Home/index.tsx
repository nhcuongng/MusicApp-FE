import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BottomBar from '../../../components/BottomBar';
import {MUSIC_LIST} from '../../../constants/MusicLibrary';
import List from '../../../components/Music/List';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Container from '../../../components/container';
import MiniPlayer from '../../../components/Music/Player/MiniPlayer';

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.tabContent}>
            <Container>
              <List songs={MUSIC_LIST} title="Recent" />
              <List songs={MUSIC_LIST} title="Favorite" />
              <List songs={MUSIC_LIST} title="The most play time" />
            </Container>
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

export default Home;
