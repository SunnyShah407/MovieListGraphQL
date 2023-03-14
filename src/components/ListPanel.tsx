import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
interface ListPanelProps {
  title: string;
  value: string;
}
export const ListPanel = (props: ListPanelProps) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 5}}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.subtitleStyle}>{props.value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 100,
  },
  subtitleStyle: {
    flexShrink: 1,
    fontSize: 13,
    marginHorizontal: 10,
  },
});
