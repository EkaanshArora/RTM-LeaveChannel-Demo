import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import RtmEngine from 'agora-react-native-rtm';

const App = () => {
  let _rtmEngine: RtmEngine | null;
  let localUid = `${+new Date()}`;
  useEffect(() => {
    initRTM();
  });

  const initRTM = async () => {
    _rtmEngine = new RtmEngine();
    _rtmEngine.on('error', (evt) => {
      console.log(evt);
    });
    _rtmEngine.on('channelMessageReceived', (evt) => {
      console.log(evt);
    });
    _rtmEngine.on('channelMemberJoined', (evt) => {
      console.log(evt);
    });
    await _rtmEngine
      .createClient('30a6bc89994d4222a71eba01c253cbc7')
      .catch((e) => console.log(e));
    await _rtmEngine?.login({uid: localUid}).catch((e) => console.log(e));
    console.log('init done');
  };

  const join = async () => {
    console.log('join');
    await _rtmEngine?.joinChannel('lobby').catch((e) => console.log(e));
  };

  const send = async () => {
    console.log('send');
    await _rtmEngine
      ?.sendMessageByChannelId('lobby', 'message')
      .catch((e) => console.log(e));
  };

  const leave = async () => {
    console.log('leave');
    await _rtmEngine?.leaveChannel('lobby').catch((e) => console.log(e));
  };

  return (
    <>
      <SafeAreaView style={styles.full}>
        <View>
          <TouchableOpacity onPress={join}>
            <Text>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={send}>
            <Text>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={leave}>
            <Text>Leave</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  full: {flex: 1},
});

export default App;
