import {
  Avatar,
  BodyText,
  FormDatePicker,
  FormPicker,
  FormPickerNative,
  FormSelect,
  FormTextInput,
  Heading,
  Subtitle,
  Title,
  WrappedTouchableNativeFeedback,
} from 'react-native-ui-toolbox';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import CatAvatar from './resources/cat-avatar.jpg';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
  },
  contentContainer: {
    paddingTop: 24,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  cardHeaderContainer: {
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomColor: '#aaa',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
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

  dateInputValidator = value => (false)
  dateInputErrorText = 'Length must be between 5 and 20.'

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
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
            <Heading>Avatar</Heading>
          </View>
          <View style={styles.rowContainer}>
            <Avatar source={CatAvatar} />
            <Avatar source={CatAvatar} rounded />
          </View>

          <View style={styles.rowContainer}>
            <Avatar source={CatAvatar} showEditButton />
            <Avatar source={CatAvatar} rounded showEditButton editButton={{ iconColor: '#000', style: { backgroundColor: 'yellow' } }} />
          </View>

          <View style={styles.rowContainer}>
            <Avatar source={CatAvatar} showIndicator />
            <Avatar source={CatAvatar} rounded showIndicator indicator={{ status: 'inactive' }} />
          </View>
        </View>

        <View style={[styles.cardContainer, { alignItems: 'center' }]}>
          <View style={styles.cardHeaderContainer}>
            <Heading>Typography</Heading>
          </View>

          <Heading>This is Heading</Heading>
          <Title>This is Title</Title>
          <Subtitle>This is Subtitle</Subtitle>
          <BodyText>This is BodyText</BodyText>
        </View>

        <View style={[styles.cardContainer]}>
          <View style={styles.cardHeaderContainer}>
            <Heading>Form Inputs</Heading>
          </View>
          <FormTextInput
            value={this.state.textInputValue}
            onValueChange={this.textInputHandleChange}
            wrapperStyle={{ marginBottom: 10 }}
            containerStyle={{ backgroundColor: '#ddd' }}
            validContainerStyle={{ borderBottomColor: 'green' }}
            invalidContainerStyle={{ borderBottomColor: 'red' }}
            inputStyle={{ color: 'blue' }}
            validInputStyle={{ color: 'green' }}
            invalidInputStyle={{ color: 'red' }}
            validator={this.textInputValidator}
            errorText={this.textInputErrorText}
            showIcon

          />
          <FormDatePicker
            mode={'time'}
            // date={this.state.date}
            onValueChange={this.datePickerHandleDateChange}
            locale={this.state.locale}
            wrapperStyle={{ marginBottom: 10 }}
            containerStyle={{ backgroundColor: '#ddd' }}
            component={TouchableHighlight}

            validInputStyle={{ color: 'green' }}
            invalidInputStyle={{ color: 'red' }}
            validator={this.dateInputValidator}
            errorText={this.dateInputErrorText}
            showIcon
            icon={{ color: 'red' }}
            modal={{
              height: 300,
              controlBarHeight: 100,
              confirmBtnText: '確定',
              cancelBtnText: '取消',
            }}
          />
          <FormPicker
            selectedValue={this.state.pickedValue}
            onValueChange={this.pickerHandleValueChange}
            wrapperStyle={{ marginBottom: 10 }}
            containerStyle={{ backgroundColor: '#ddd' }}
            inputStyle={{ }}
            component={TouchableHighlight}

            invalidInputStyle={{ color: 'red' }}
            validator={this.dateInputValidator}
            errorText={this.dateInputErrorText}

            fullScreen
            showIcon
            modal={{
              height: 500,
              controlBarHeight: 100,
              controlBarStyle: { backgroundColor: 'rgba(0,0,0,0.0)' },
              contentContainerStyle: { backgroundColor: 'yellow' },
              containerStyle: { borderWidth: 2 },
              controlBarPosition: 'bottom',
            }}
          />
          <FormPickerNative
            selectedValue={this.state.pickedValue}
            onValueChange={this.pickerHandleValueChange}
            wrapperStyle={{ marginBottom: 10 }}
            containerStyle={{ backgroundColor: '#ddd' }}
            inputStyle={{ }}
            component={TouchableNativeFeedback}

            invalidInputStyle={{ color: 'red' }}
            validator={this.dateInputValidator}
            errorText={this.dateInputErrorText}

            fullScreen
            showIcon
            modal={{
            }}
          />
          <FormSelect
            items={[
              { value: 0, label: '123123123' },
              { value: 1, label: '456456456456' },
              { value: 2, label: '789789789789789' },
              { value: 3, label: '789789789789789' },
              { value: 4, label: '789789789789789' },
            ]}
            component={WrappedTouchableNativeFeedback}
            componentProps={{
              activeOpacity: 0.1,
            }}
            selectedValues={this.state.selectedValues}
            onValueChange={this.selectHandleValueChange}
            containerStyle={{ backgroundColor: '#ddd', padding: 0, borderWidth: 0, borderRadius: 20, overflow: 'hidden', height: 100 }}
            contentContainerStyle={{ backgroundColor: undefined }}
            inputStyle={{ color: 'black' }}
            showIcon

            invalidInputStyle={{ color: 'red' }}
            validator={this.dateInputValidator}
            errorText={this.dateInputErrorText}

            modal={{
              height: 300,
              controlBarHeight: 100,
              confirmBtnText: '確定',
              cancelBtnText: '取消',
              fullScreen: true,
            }}
          />
        </View>



        <Text onPress={() => { this.setState({ locale: 'zh-tw', date: null }); }}>{'Set Date'}</Text>
      </ScrollView>
    );
  }
}
