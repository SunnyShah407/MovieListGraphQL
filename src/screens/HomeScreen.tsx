import {useQuery} from '@apollo/client';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import LoadingView from '../components/LoadingView';
import {QUERY_MOVIE_LIST} from '../graphql/qgl/queries';
import MovieList from '../components/MovieList';
import UIPlaceholderInfo from '../components/PlaceholderInfo';

export default function HomeScreen({navigation}) {
  const {data, loading, error} = useQuery(QUERY_MOVIE_LIST, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  });

  if (loading) return <LoadingView />;

  if (data == null || data.length == 0) {
    return <UIPlaceholderInfo />;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MovieList
          data={data.allFilms.films}
          callBack={item => {
            navigation.navigate('MovieDetail', {itemId: item.id});
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
  },
  buttonStyle: {
    fontSize: 15,
  },
  filmDetailStyle: {
    flex: 1,
    padding: 10,
  },
  titleStyle: {fontSize: 16, padding: 10},
  subtitleStyle: {flexDirection: 'row', alignItems: 'flex-end'},
});
