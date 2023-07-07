import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, StyleSheet, Platform} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import LogContext from '../contexts/LogContext';

function WriteScreen({route}) {
  const log = route.params?.log;

  const [title, setTitle] = useState(log ? log.title : '');
  const [body, setBody] = useState(log ? log.body : '');
  const navigation = useNavigation();

  const {onCreate} = useContext(LogContext);

  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
