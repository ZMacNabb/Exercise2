import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

const App = () => {
  const you = () => {
    alert('You press the you button');
  };
  const home = () => {
    alert('This is the place you stay');
  };
  const love = () => {
    alert('This is the love message');
  };
   const family = () => {
    alert('Family quote: Blood is thicker then water');
  };
   const friends = () => {
    alert('Why even have this message when I dont have any');
  };
   const school = () => {
    alert('The school I go to is Lakehead University');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
      <View style={styles.box1}>
      <Button onPress={you} title="You" color="orange" />
      </View>
      <View style={styles.box2}>
        <Button onPress={home} title="Home" color="blue" />
      </View>
      <View style={styles.box3}>
        <Button onPress={love} title="love" color="pink" />
      </View>
      <View style={styles.box4}>
        <Button onPress={family} title="family" color="green" />
      </View>
      <View style={styles.box5}>
        <Button onPress={friends} title="friends" color="red" />
      </View>
      <View style={styles.box6}>
        <Button onPress={school} title="school" color="purple" />
      </View>
      </View>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   box1: {
    position: 'absolute',
    top: 100,
    left: 40,
    width:100,
    height: 100,
  },
     box2: {
    position: 'absolute',
    top: 100,
    left: 200,
    width:100,
    height: 100,
  },
      box3: {
    position: 'absolute',
    top: 200,
    left: 40,
    width:100,
    height: 100,
  },
   box4: {
    position: 'absolute',
    top: 200,
    left: 200,
    width:100,
    height: 100,
  },
   box5: {
    position: 'absolute',
    top: 300,
    left: 40,
    width:100,
    height: 100,
  },
     box6: {
    position: 'absolute',
    top: 300,
    left: 200,
    width:100,
    height: 100,
  },
});
export default App;
