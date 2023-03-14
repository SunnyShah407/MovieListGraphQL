import {View, Text, StyleSheet, Pressable, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {AccordionList} from 'accordion-collapse-react-native';

const MovieList = ({data, callBack}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  function _clicked(item) {
    if (selectedItem && selectedItem == item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  }

  const head = item => {
    return (
      <>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.iconview}>
              {selectedItem == item.id ? (
                <Image
                  source={require('../assets/arrow_up.png')}
                  size={22}
                  color="#2C81E0"
                />
              ) : (
                <Image
                  source={require('../assets/arrow_down.png')}
                  size={22}
                  color="#2C81E0"
                />
              )}
            </View>
            <Pressable
              onPress={() => {
                callBack(item);
              }}
              style={styles.buttonStyle}>
              <Text>Details</Text>
            </Pressable>
          </View>
        </View>
        {selectedItem == item.id ? null : <View style={styles.divider1}></View>}
      </>
    );
  };
  const body = item => {
    return (
      <>
        <FlatList
          horizontal={true}
          data={item.speciesConnection.species}
          renderItem={({item}) => {
            return (
              <View style={styles.specieStyle}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
        <View style={styles.divider2}></View>
      </>
    );
  };

  return (
    <AccordionList
      onToggle={(item, index) => _clicked(item, index)}
      list={data}
      header={head}
      body={body}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
  },
  divider1: {
    height: 0.5,
    backgroundColor: '#252525',
    marginVertical: 3,
  },
  divider2: {
    height: 1,
    backgroundColor: '#bbbbbb',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8E8E8E',
    alignSelf: 'flex-end',
  },
  specieStyle: {
    flex: 1,
    padding: 10,
    backgroundColor: '#8E8E8E',
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  titleStyle: {fontSize: 16, marginHorizontal: 10, alignSelf: 'center'},
  iconview: {
    width: 50,
    justifyContent: 'center',
    height: 50,
    alignSelf: 'flex-end',
  },
});

export default MovieList;
