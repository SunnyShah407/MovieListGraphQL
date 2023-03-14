import {View, StyleSheet, ScrollView} from 'react-native';

import {useQuery} from '@apollo/client';
import {QUERY_MOVIE_DETAIL} from '../graphql/qgl/queries';
import React from 'react';
import LoadingView from '../components/LoadingView';
import {ListPanel} from '../components/ListPanel';
import {getEncodeMovieId} from '../utilis/utilis';
import UIPlaceholderInfo from '../components/PlaceholderInfo';

export default function MovieDetail({route}) {
  const filmId = getEncodeMovieId(route.params.itemId);

  const {data, loading, error} = useQuery(QUERY_MOVIE_DETAIL, {
    variables: {filmId},
  });

  if (loading) return <LoadingView />;
  if (data == null || data.length == 0) {
    return <UIPlaceholderInfo />;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <ListPanel title="Name" value={data.film.title} />
        <ListPanel title="Director" value={data.film.director} />
        <ListPanel title="Release Date:" value={data.film.releaseDate} />
        <ListPanel title="Producers:" value={data.film.producers.join(',')} />
        <ListPanel title="Description:" value={data.film.openingCrawl} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 10,
  },
  container: {flex: 1, justifyContent: 'flex-start', padding: 20},
});
