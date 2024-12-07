/**
 * Sample React Native DownloadMusic
 * https://github.com/facebook/react-native
 *
 * @format
 */

import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
// import FileReader from 'react-native-filereader';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewDownloadMusicScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// var fileReader = new FileReader();

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function DownloadMusic(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleOpenFilePicker = async () => {
    const url =
      'https://www.dropbox.com/scl/fi/hm1qc306z0zrxal9hgh3d/m-t-i-14-Casper-Bon-Nghi-m-feat.-buitruonglinh-Track-03-Album-S-KH-NG.mp3?rlkey=yijxc74w9k8v84wr24pv0dtwe&st=ghy6xdrz&dl=1';

    // *IMPORTANT*: The correct file extension is always required.
    // You might encounter issues if the file's extension isn't included
    // or if it doesn't match the mime type of the file.
    // https://stackoverflow.com/a/47767860
    function getUrlExtension(url) {
      return url.split(/[#?]/)[0].split('.').pop().trim();
    }

    const extension = getUrlExtension(url);

    // Feel free to change main path according to your requirements.
    const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension}`;

    const options = {
      fromUrl: url,
      toFile: localFile,
    };
    RNFS.downloadFile(options)
      .promise.then(() => FileViewer.open(localFile))
      .then(() => {
        // success
        console.log('xasxaxa');
      })
      .catch(error => {
        // error
      });

    // try {
    //   const res = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles],
    //   });
    //   await FileViewer.open(res.uri);
    // } catch (e) {
    //   // error
    // }
    // get a list of files and directories in the main bundle
    // var path = RNFS.DocumentDirectoryPath + '/test.txt';
    // const bufferFile = Buffer.from(song, 'base64');
    // const writeToPath = RNFS.DocumentDirectoryPath + '/test.mp3';
    // // write the file
    // RNFS.writeFile(writeToPath, bufferFile.toString(), 'utf8')
    //   .then(success => {
    //     console.log('FILE WRITTEN!', success, path);
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
  };

  const handleOpenDocument = () => {
    // fileReader.readAsDataURL('./test.mp3');
    // get a list of files and directories in the main bundle
    // RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    //   .then(result => {
    //     console.log('GOT RESULT', result[0]);
    //     // stat the first file
    //     return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    //   })
    //   .then(statResult => {
    //     if (statResult[0].isFile()) {
    //       // if we have a file, read it
    //       return RNFS.readFile(statResult[1], 'utf8');
    //     }
    //     return 'no file';
    //   })
    //   .then(contents => {
    //     // log the file contents
    //     console.log('my file', contents);
    //   })
    //   .catch(err => {
    //     console.log(err.message, err.code);
    //   });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="Create a file" onPress={handleOpenFilePicker} />
          <Button title="Open document" onPress={handleOpenDocument} />
          <Section title="Step One">
            Edit <Text style={styles.highlight}>DownloadMusic.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default DownloadMusic;
