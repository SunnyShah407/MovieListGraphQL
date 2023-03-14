import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const UIPlaceholderInfo = ({description = 'Not Data available', style}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.helperText}>{description}</Text>
    </View>
  );
};

UIPlaceholderInfo.proptypes = {
  description: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  helperText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25,
  },
});

export default UIPlaceholderInfo;
