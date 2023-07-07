import React, {useContext} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import LogContext from '../contexts/LogContext';

function FeedScreen() {
  const {text, setText} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="텍스트를 입력하세요"
        style={styles.input}
      />
    </View>
  );
}

function Box({children}) {
  return <View style={styles.box}>{children('HELLO WORLD')}</View>;
}

const styles = StyleSheet.create({
  block: {},
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedScreen;
