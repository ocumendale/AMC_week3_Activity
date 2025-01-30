import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [number, onChangeNumber] = React.useState('Contact Number: ');

  const [value, onChangeText] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>

      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828439.png'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/5988/5988509.png'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          keyboardType="numeric"
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <Image source={{uri: 'https://th.bing.com/th/id/OIP.newfrlS5Vc-VLL9mbTKjIAHaGG?rs=1&pid=ImgDetMain'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        </View>
        
      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://th.bing.com/th/id/R.64aceba0537827b878c733b0ce477cf2?rik=2lfQePUUeAxROw&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f1144241_school-icons-png.png&ehk=SuUnkD4ZmvUEurORBZcpfe997ilgQyUj1toJU4TGW3M%3d&risl=&pid=ImgRaw&r=0'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://th.bing.com/th/id/OIP.GKPhLi5OmNB_ynNj4UxMPQHaGv?rs=1&pid=ImgDetMain'}}
        style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <Image source={{uri: 'https://th.bing.com/th/id/OIP.iCbvP_s1IhlxWUdBOK6hXwHaHa?rs=1&pid=ImgDetMain'}}
        style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://th.bing.com/th/id/R.2cb691cd5c05328f15f39263f70220ce?rik=Z7%2f8evAQURfttw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1344166.png&ehk=Eup27LJAdO89zKYNjO5mrk80mR6Wc%2bMwWeLa%2bD8eA%2f4%3d&risl=&pid=ImgRaw&r=0'}}
        style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <Image source={{uri: 'https://www.kindpng.com/picc/m/115-1157860_fire-icon-flame-hd-png-download.png'}}
        style={{width: 50, height: 45}} />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
        />
        </View>

        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 20,
  },
    textInput: {
    height: 200,
    margin: 1,
    borderWidth: 1,
    padding: 30,
  },
    container: {
    flex: 1,
    padding: 10,
  },
});


export default TextInputExample;