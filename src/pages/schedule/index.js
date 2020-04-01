import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {width, setSpText, scaleSizeH} from '@/util/screen';
import ScheduleItem from './components/schedule-item';
import {
  Calendar,
  CalendarList,
  Agenda,
  calendarTheme,
} from 'react-native-calendars';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>SCHEDULE</Text>
    </View>
  );
};
export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        {/* <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2017-05-16'}
          renderItem={this.renderItem.bind(this)}
        /> */}
        <Agenda
          items={{
            '2020-04-01': [
              {name: 'item 1 - any js object'},
              {name: 'item 1 - any js object'},
              {name: 'item 1 - any js object'},
              {name: 'item 1 - any js object'},
              {name: 'item 1 - any js object'},
              {name: 'item 1 - any js object'},
            ],
            '2020-04-02': [
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
            ],
            '2020-04-03': [
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
              {name: 'item 2 - any js object', height: 80},
            ],
          }}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={month => {
            console.log('trigger items loading');
          }}
          // Callback that fires when the calendar is opened or closed
          onCalendarToggled={calendarOpened => {
            console.log(calendarOpened);
          }}
          // Callback that gets called on day press
          onDayPress={day => {
            console.log('day pressed');
          }}
          // Callback that gets called when day changes while scrolling agenda list
          onDayChange={day => {
            console.log('day changed');
          }}
          // Initially selected day
          // selected={'2012-05-16'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          // minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2012-05-30'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {
            return <ScheduleItem />;
          }}
          // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderDay={(day, item) => {
            return <Text />;
          }}
          // Specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return <View />;
          }}
          // Specify how agenda knob should look like
          renderKnob={() => {
            return <View />;
          }}
          // Specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <View />;
          }}
          // Specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          // Hide knob button. Default = false
          hideKnob={true}
          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          // markedDates={{
          //   '2020-04-01': {selected: true},
          // }}
          // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
          disabledByDefault={true}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
          onRefresh={() => console.log('refreshing...')}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
          refreshControl={null}
          // Agenda theme
          theme={{
            backgroundColor: '#f5f5f5',
            calendarBackground: '#f5f5f5',
            textSectionTitleColor: '#777777',
            selectedDayBackgroundColor: '#2B2B2B',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#ffffff',
            dayTextColor: '#131313',
            textDisabledColor: '#131313',
            dotColor: 'transparent',
            selectedDotColor: 'transparent',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#131313',
            indicatorColor: '#131313',
            textDayFontWeight: '600',
            // textMonthFontWeight: 'bold',
            // textDayHeaderFontWeight: '400',
            textDayFontSize: setSpText(32),
            textMonthFontSize: setSpText(32),
            textDayHeaderFontSize: setSpText(26),
          }}
          // Agenda container style
          style={{
            height: 200
          }}
        />
        {/* <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={[{key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <ScheduleItem>{item.key}</ScheduleItem>}
        /> */}
      </SafeAreaView>
    );
  }
  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.itemAgent, {height: item.height}]}
        onPress={() => Alert.alert(item.name)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  header_title: {
    fontSize: setSpText(32),
    color: '#000000',
    fontWeight: '600',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  separator: {
    width: width,
    height: scaleSizeH(26),
    backgroundColor: '#f5f5f5',
  },
  itemAgent: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
