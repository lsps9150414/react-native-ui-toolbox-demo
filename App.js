import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar, BodyText, FormDatePicker, FormPicker, FormSelect, FormTextInput, Heading, Subtitle, Title } from 'react-native-ui-toolbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const ITEMS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' },
  { label: 'Option 8', value: '8' },
  { label: 'Option 9', value: '9' },
  { label: 'Option 10', value: '10' },
  { label: 'Option 11', value: '11' },
  { label: 'Option 12', value: '12' },
  { label: 'Option 13', value: '13' },
  { label: 'Option 14', value: '14' },
  { label: 'Option 15', value: '15' },
  { label: 'Option 16', value: '16' },
  { label: 'Option 17', value: '17' },
  { label: 'Option 18', value: '18' },
  { label: 'Option 19', value: '19' },
  { label: 'Option 20', value: '20' },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: 'This is a text input',
      locale: 'en',
      date: new Date(),
      pickedValue: ITEMS[2].value,
      selectedValues: [0],
      items: ITEMS,
    };
  }
  textInputHandleChange = (value) => {
    console.log(value);
    this.setState({ textInputValue: value });
  }
  textInputValidator = value => (value.length > 4 && value.length < 21)
  textInputErrorText = 'Length must be between 5 and 20.'
  datePickerHandleDateChange = (date) => {
    console.log(date);
    this.setState({ date });
  }
  pickerHandleValueChange = (value) => {
    console.log(value);
    this.setState({ pickedValue: value });
  }
  selectHandleValueChange = (values) => {
    console.log(values);
    this.setState({ selectedValues: values });
  }
  render() {
    return (
      <View style={styles.container}>
        <Avatar source={{ uri: '' }} />
        <Heading>Heading</Heading>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <BodyText>BodyText</BodyText>

        {/* <FormTextInput
          value={this.state.textInputValue}
          onChangeText={this.textInputHandleChange}
          containerStyle={{ }}
          validContainerStyle={{ borderBottomColor: 'green' }}
          invalidContainerStyle={{ borderBottomColor: 'red' }}
          inputStyle={{ color: 'blue' }}
          validInputStyle={{ color: 'green' }}
          invalidInputStyle={{ color: 'red' }}
          validator={this.textInputValidator}
          errorText={this.textInputErrorText}
        /> */}
        <FormDatePicker
          date={this.state.date}
          locale={this.state.locale}
          onDateChange={this.datePickerHandleDateChange}
          confirmBtnText={'確定'}
          cancelBtnText={'取消'}
        />
        <FormPicker
          items={this.state.items}
          selectedValue={this.state.pickedValue}
          onValueChange={this.pickerHandleValueChange}
          containerStyle={{ backgroundColor: 'yellow' }}
          modalHeight={400}
          controlBarHeight={100}
        />
        <FormSelect
          items={[
            { value: 0, label: '123123123' },
            { value: 1, label: '456456456456' },
            { value: 2, label: '789789789789789' },
            { value: 3, label: '789789789789789' },
            { value: 4, label: '789789789789789' },
          ]}
          selectedValues={this.state.selectedValues}
          onValueChange={this.selectHandleValueChange}
          containerStyle={{ backgroundColor: 'pink', borderBottomColor: 'red', marginBottom: 12 }}
          fullScreen
        />
        <TouchableOpacity
          onPress={() => { this.setState({ locale: 'zh-tw', date: new Date(2000), pickedValue: ITEMS[0].value, items: [] }); }}
        >
          <Text>Test</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
