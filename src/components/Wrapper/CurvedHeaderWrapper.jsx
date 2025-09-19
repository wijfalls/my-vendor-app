import {Icons} from 'assets/images';
import {SearchInput} from 'components/Input';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const CurvedHeaderWrapper = ({
  children,
  showSearchInput = false,
  searchInputProps,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Add your curved header design here */}
      </View>

      <View style={styles.content}>{children}</View>
      {showSearchInput && (
        <View style={styles.searchInputContainer}>
          <SearchInput
            placeholder={'Search...'}
            style={styles.searchInput}
            rightIcon={Icons.Search}
            {...searchInputProps}
          />
        </View>
      )}
    </View>
  );
};

export default CurvedHeaderWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  header: {
    height: vh * 20, // Adjust the height as needed
    backgroundColor: Theme.primary,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    // Add more styles to create the curved effect
  },
  searchInputContainer: {
    position: 'absolute',
    top: vh * 3, // Adjust the position as needed
    width: '100%',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginTop: vh * 3.5, // Adjust the margin as needed
    backgroundColor: Theme.white,
    // borderTopLeftRadius: vw * 10, // Adjust the radius as needed
    // borderTopRightRadius: vw * 10, // Adjust the radius as needed
    paddingTop: vh * 4, // Adjust the padding as needed
  },
  searchInput: {
    width: vw * 80,
    borderRadius: vh * 5,
  },
});
