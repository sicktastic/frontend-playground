import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}
          />
          <Button title="Add" style={styles.placeButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  placeInput:  {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});
