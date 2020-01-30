import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SelectInput from 'react-native-select-input-ios';
import {Icon, Badge, DatePicker} from 'native-base';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), chosenDate: new Date()};
  }

  render() {
    const options = [
      {value: 0, label: 'All Status'},
      {value: 1, label: 'Status 1'},
      {value: 2, label: 'Status 2'},
    ];
    const priorities = [
      {value: 0, label: 'All Priority'},
      {value: 1, label: 'Priority 1'},
      {value: 2, label: 'Priority 2'},
    ];
    const status = [
      {value: 0, label: 'Pending'},
      {value: 1, label: 'Done'},
      {value: 2, label: 'Don"t Know'},
    ];

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View
            style={{
              backgroundColor: '#ADD8E6',
              height: 60,
              flexDirection: 'row',
            }}>
            <Image
              source={require('./assets/1.png')}
              style={{marginTop: 20, marginLeft: 15, height: 20, width: 20}}
            />
            <Text
              style={{
                marginLeft: '10%',
                paddingTop: 15,
                fontSize: 20,
                fontFamily: 'JTMarnieRegular',
              }}>
              Facility Booking
            </Text>
            <View
              style={{
                left: 90,
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 4,
                marginTop: 20,
                marginBottom: 15,
                flexDirection: 'row',
              }}>
              <Icon
                type="AntDesign"
                name="plus"
                style={{
                  fontSize: 15,
                  paddingTop: 4,
                  color: '#4f565b',
                  paddingLeft: 2,
                }}
              />
              <Icon
                type="FontAwesome"
                name="shower"
                style={{
                  fontSize: 15,
                  paddingTop: 4,
                  paddingLeft: 2,
                  marginRight: 2,
                  marginRight: 6,
                  color: '#4f565b',
                  transform: [{rotateY: '180deg'}],
                }}
              />
            </View>
            <Icon
              type="EvilIcons"
              name="search"
              style={{
                left: 105,
                paddingTop: 15,
                width: 50,
                fontSize: 35,
                color: '#4f565b',
              }}
            />
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                paddingRight: '2%',
                paddingLeft: '3%',
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor: '#062748',
              }}>
              <View
                style={{
                  width: '46%',
                  borderColor: 'black',
                  borderWidth: 2,
                  borderRadius: 4,
                  marginRight: '3%',
                  backgroundColor: 'white',
                }}>
                <SelectInput value={0} options={options} />
              </View>
              <View
                style={{
                  width: '46%',
                  borderColor: 'black',
                  borderWidth: 2,
                  borderRadius: 4,
                  marginLeft: '2%',
                  backgroundColor: 'white',
                }}>
                <SelectInput value={0} options={priorities} />
              </View>
            </View>
            <View style={{backgroundColor: 'white'}}>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2}}>
                    <Text style={{fontSize: 18}}>Requested By</Text>
                  </View>
                  <View style={{flex: 3, flexDirection: 'row'}}>
                    <Icon type="EvilIcons" name="user" style={{fontSize: 40}} />
                    <View>
                      <Text style={{color: '#2878B5', fontSize: 15}}>
                        Johan Khaw Academy
                      </Text>
                      <Text style={{color: '#83888E', fontSize: 12}}>
                        4 Months ago
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#F2F6F9',
                  borderBottomWidth: 2,
                }}></View>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2}}>
                    <Text style={{fontSize: 18}}>Priority</Text>
                  </View>
                  <View style={{flex: 3}}>
                    <Text
                      style={{
                        color: '#2878B5',
                        fontSize: 15,
                        backgroundColor: '#C6EBFC',
                        paddingLeft: 15,
                        paddingTop: 5,
                        paddingBottom: 8,
                        marginRight: '60%',
                        borderWidth: 2,
                        borderRadius: 4,
                        borderColor: '#C6EBFC',
                      }}>
                      Normal
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#F2F6F9',
                  borderBottomWidth: 2,
                }}></View>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2, marginTop: 10}}>
                    <Text style={{fontSize: 18}}>Date & Time</Text>
                  </View>
                  <View style={{flex: 3}}>
                    <ImageBackground
                      source={require('./assets/2.png')}
                      style={{width: 110, height: 51}}>
                      <DatePicker
                        defaultDate={this.state.chosenDate}
                        minimumDate={new Date(2000, 1, 1)}
                        maximumDate={new Date(2050, 12, 31)}
                        locale={'en'}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'default'}
                        placeHolderText="Select Date"
                        textStyle={{
                          color: 'black',
                          fontWeight: 'bold',
                          paddingTop: 15,
                        }}
                        placeHolderTextStyle={{
                          color: 'black',
                          paddingTop: 15,
                        }}
                        onDateChange={this.setDate}
                        disabled={false}
                        formatChosenDate={date => {
                          return moment(date).format('MMM - DD');
                        }}
                      />
                    </ImageBackground>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Icon
                        type="EvilIcons"
                        name="clock"
                        style={{fontSize: 25, color: '#4f565b'}}
                      />
                      <Text style={{color: '#4f565b', fontWeight: 'bold'}}>
                        02:14 PM - 03:13 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#F2F6F9',
                  borderBottomWidth: 2,
                }}></View>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2, marginTop: 10}}>
                    <Text style={{fontSize: 18}}>Status</Text>
                  </View>
                  <View style={{flex: 3}}>
                    <View
                      style={{
                        borderColor: '#9B85CD',
                        borderWidth: 2,
                        borderRadius: 4,
                        marginLeft: '2%',
                        backgroundColor: '#9B85CD',
                        margin: 0,
                      }}>
                      <SelectInput
                        value={0}
                        options={status}
                        labelStyle={{color: 'white'}}
                        pickerItemsStyle={{color: 'white'}}
                        style={{color: 'white'}}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#F2F6F9',
                  borderBottomWidth: 2,
                }}></View>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2}}>
                    <Text style={{fontSize: 18}}>Actions</Text>
                  </View>
                  <View style={{flex: 3}}>
                    <Icon
                      type="EvilIcons"
                      name="trash"
                      style={{
                        fontSize: 40,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderRadius: 4,
                        marginRight: '81%',
                        paddingTop: 5,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}></View>

              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2}}>
                    <Text style={{fontSize: 18}}>Requested By</Text>
                  </View>
                  <View style={{flex: 3, flexDirection: 'row'}}>
                    <Icon type="EvilIcons" name="user" style={{fontSize: 40}} />
                    <View>
                      <Text style={{color: '#2878B5', fontSize: 15}}>
                        Johan Khaw Academy
                      </Text>
                      <Text style={{color: '#83888E', fontSize: 12}}>
                        4 Months ago
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#F2F6F9',
                  borderBottomWidth: 2,
                }}></View>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2}}>
                    <Text style={{fontSize: 18}}>Priority</Text>
                  </View>
                  <View style={{flex: 3}}>
                    <Text
                      style={{
                        color: '#2878B5',
                        fontSize: 15,
                        backgroundColor: '#C6EBFC',
                        paddingLeft: 15,
                        paddingTop: 5,
                        paddingBottom: 8,
                        marginRight: '60%',
                        borderWidth: 2,
                        borderRadius: 4,
                        borderColor: '#C6EBFC',
                      }}>
                      Normal
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#F2F6F9',
                  borderBottomWidth: 2,
                }}></View>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2, marginTop: 10}}>
                    <Text style={{fontSize: 18}}>Date & Time</Text>
                  </View>
                  <View style={{flex: 3}}>
                    <ImageBackground
                      source={require('./assets/2.png')}
                      style={{width: 110, height: 51}}>
                      <DatePicker
                        defaultDate={this.state.chosenDate}
                        minimumDate={new Date(2000, 1, 1)}
                        maximumDate={new Date(2050, 12, 31)}
                        locale={'en'}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'default'}
                        placeHolderText="Select Date"
                        textStyle={{
                          color: 'black',
                          fontWeight: 'bold',
                          paddingTop: 15,
                        }}
                        placeHolderTextStyle={{
                          color: 'black',
                          paddingTop: 15,
                        }}
                        onDateChange={this.setDate}
                        disabled={false}
                        formatChosenDate={date => {
                          return moment(date).format('MMM - DD');
                        }}
                      />
                    </ImageBackground>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Icon
                        type="EvilIcons"
                        name="clock"
                        style={{fontSize: 25, color: '#4f565b'}}
                      />
                      <Text style={{color: '#4f565b', fontWeight: 'bold'}}>
                        02:14 PM - 03:13 PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#F2F6F9',
                  borderBottomWidth: 2,
                }}></View>
              <View style={{padding: 20}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 2, marginTop: 10}}>
                    <Text style={{fontSize: 18}}>Status</Text>
                  </View>
                  <View style={{flex: 3}}>
                    <View
                      style={{
                        borderColor: '#9B85CD',
                        borderWidth: 2,
                        borderRadius: 4,
                        marginLeft: '2%',
                        backgroundColor: '#9B85CD',
                        margin: 0,
                      }}>
                      <SelectInput value={0} options={status} />
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}></View>
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                paddingLeft: '10%',
                paddingTop: 25,
                paddingBottom: 25,
                backgroundColor: '#062748',
                marginBottom:50,
                flex: 1,
              }}>
              <View style={{flex: 2}}>
                <Icon
                  type="Entypo"
                  name="home"
                  style={{
                    color: 'white',
                    fontSize: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
              <View style={{flex: 2}}>
                <Icon
                  type="AntDesign"
                  name="hearto"
                  style={{
                    color: 'white',
                    fontSize: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <View>
                  <Icon
                    type="MaterialIcons"
                    name="notifications-none"
                    style={{
                      color: 'white',
                      fontSize: 35,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </View>
                <Badge info style={{height: 20, right: 17}}>
                  <Text>2</Text>
                </Badge>
              </View>
              <View style={{flex: 2}}>
                <Icon
                  type="EvilIcons"
                  name="user"
                  style={{
                    color: 'white',
                    fontSize: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
              <View style={{flex: 2}}>
                <Icon
                  type="Entypo"
                  name="menu"
                  style={{
                    color: 'white',
                    fontSize: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
