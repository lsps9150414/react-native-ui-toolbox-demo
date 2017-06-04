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
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
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
  formInputWrapperStyle: {
    marginBottom: 10,
  },
  formInputContainerStyle: {
    backgroundColor: '#eee',
  },
  formInputStyle: {
    color: '#333',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue1: 'Text input',
      textInputValue2: 'Text input (with validation)',
      textInputValue3: 'Text input (multiline)',
      date: null,
      time: null,
      locale: 'en',
      pickedValue1: null,
      pickedValue2: null,
      selectedValues1: null,
      selectedValues2: null,
    };
  }

  handleTextChange1 = (value) => {
    this.setState({ textInputValue1: value });
  }

  handleTextChange2 = (value) => {
    this.setState({ textInputValue2: value });
  }

  handleTextChange3 = (value) => {
    this.setState({ textInputValue3: value });
  }

  dateInputValidator = value => (false)
  dateInputErrorText = 'Length must be between 5 and 20.'

  handleDateChange = (date) => {
    this.setState({ date });
  }

  handleTimeChange = (time) => {
    this.setState({ time });
  }

  handlePickedChange1 = (value) => {
    this.setState({ pickedValue1: value });
  }

  handlePickedChange2 = (value) => {
    this.setState({ pickedValue2: value });
  }

  handleSelectedChange1 = (values) => {
    this.setState({ selectedValues1: values });
  }

  handleSelectedChange2 = (values) => {
    this.setState({ selectedValues2: values });
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
            value={this.state.textInputValue1}
            onValueChange={this.handleTextChange1}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
            icon={{ name: 'textsms' }}
          />
          <FormTextInput
            value={this.state.textInputValue2}
            onValueChange={this.handleTextChange2}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
            icon={{ name: 'textsms' }}
            validContainerStyle={{ borderBottomColor: 'green' }}
            validInputStyle={{ color: 'green' }}
            invalidContainerStyle={{ borderBottomColor: 'red' }}
            invalidInputStyle={{ color: 'red' }}
            validator={value => (value && (value.length >= 5 && value.length <= 20))}
            errorText={'Length must be between 5 and 20.'}
          />
          <FormTextInput
            value={this.state.textInputValue3}
            onValueChange={this.handleTextChange3}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={[styles.formInputContainerStyle, { height: 100 }]}
            contentContainerStyle={{ alignItems: 'flex-start' }}
            multiline
            inputStyle={styles.formInputStyle}
            showIcon
            icon={{ name: 'textsms' }}
          />
          <FormDatePicker
            placeholder={'Date picker'}
            mode={'date'}
            date={this.state.date}
            onValueChange={this.handleDateChange}
            locale={this.state.locale}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
            icon={{ name: 'date-range', color: 'green' }}
          />
          <FormDatePicker
            placeholder={'Time picker'}
            mode={'time'}
            date={this.state.time}
            onValueChange={this.handleTimeChange}
            locale={this.state.locale}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
            icon={{ name: 'access-time', color: 'red' }}
          />

          <FormPicker
            placeholder={'Picker (custom modal style)'}
            items={[
              { value: true, label: 'Yep' },
              { value: false, label: 'Nope' },
            ]}
            pickedValue={this.state.pickedValue1}
            onValueChange={this.handlePickedChange1}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
            modal={{
              height: 500,
              controlBarHeight: 100,
              controlBarPosition: 'bottom',
              confirmBtnText: 'Done',
              cancelBtnText: 'Nah',
              containerStyle: { borderWidth: 3 },
              bodyContainerStyle: { backgroundColor: 'mediumturquoise' },
              bodyContentContainerStyle: {
                margin: 20,
                padding: 40,
                flexGrow: 1,
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              },
              controlBarStyle: { backgroundColor: 'darkslategrey', borderColor: 'white', borderTopWidth: 3 },
              cancelBtnTextStyle: { color: 'yellow' },
              confirmBtnTextStyle: { color: 'white' },
            }}
          />
          <FormPicker
            placeholder={'Picker (full screen modal)'}
            items={[
              { value: true, label: 'Yep' },
              { value: false, label: 'Nope' },
            ]}
            pickedValue={this.state.pickedValue2}
            onValueChange={this.handlePickedChange2}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
            modal={{ fullScreen: true }}
          />
          <FormSelect
            placeholder={'Selector'}
            items={[
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
              { value: 4, label: 'Option 4' },
              { value: 5, label: 'Option 5' },
            ]}
            selectedValues={this.state.selectedValues1}
            onValueChange={this.handleSelectedChange1}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
          />
          <FormSelect
            placeholder={'Selector (custom component)'}
            component={WrappedTouchableNativeFeedback}
            componentProps={{ activeOpacity: 0.1 }}
            items={[
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
              { value: 4, label: 'Option 4' },
              { value: 5, label: 'Option 5' },
            ]}
            selectedValues={this.state.selectedValues2}
            onValueChange={this.handleSelectedChange2}
            wrapperStyle={styles.formInputWrapperStyle}
            containerStyle={styles.formInputContainerStyle}
            inputStyle={styles.formInputStyle}
            showIcon
          />
        </View>

        <View style={[styles.cardContainer]}>
          <Button
            title={'Clear Date'}
            onPress={() => { this.setState({ date: null }); }}
          />
          <Button
            title={'Clear Time'}
            onPress={() => { this.setState({ time: null }); }}
          />
          <Button
            title={'Set Date locale to zh-tw'}
            onPress={() => { this.setState({ locale: 'zh-tw' }); }}
          />
          <Button
            title={'Clear Pickers'}
            onPress={() => { this.setState({ pickedValue1: null, pickedValue2: null }); }}
          />
          <Button
            title={'Clear Selectors'}
            onPress={() => { this.setState({ selectedValues1: null, selectedValues2: null }); }}
          />
        </View>
      </ScrollView>
    );
  }
}
