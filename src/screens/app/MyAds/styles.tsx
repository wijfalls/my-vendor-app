import {StyleSheet} from 'react-native';
import {FontSize, vh, vw} from 'utils/Constants.util';
import {Theme} from 'utils/Theme.util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  classifiedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF6E00',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  classifiedText: {
    // color: '#FF6E00',
    marginRight: 4,
    fontWeight: '500',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchLabel: {
    color: '#9E9E9E',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
  },
  searchIcon: {
    padding: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 12,
  },
  tab: {
    paddingVertical: 12,
    marginRight: 24,
    width: (vw * 75) / 4,
    textAlign: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6E00',
  },
  tabText: {
    color: '#757575',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FF6E00',
    fontWeight: 'bold',
  },
  adsList: {
    padding: 8,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  adItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    width: '48%',
    marginHorizontal: '1%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  adImageContainer: {
    position: 'relative',
    height: 120,
  },
  adImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    gap: 4,
  },
  iconButton: {
    backgroundColor: Theme.white,
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    height: 15,
    width: 15,
  },
  adDetails: {
    padding: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
  },
  name: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    paddingVertical: 4,
  },
  actionText: {
    fontSize: 12,
    color: '#FF6E00',
    fontWeight: '500',
  },
  searchInputContainer: {
    marginTop: vh * 1,
    marginBottom: vh * 0,
  },
  arrow: {
    height: vh * 2,
    width: vh * 2,
    marginLeft: vw * 1.2,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    columnGap: 10,
    marginTop: 5,
  },
  title: {
    fontSize: FontSize * 0.9,
    color: Theme.grayText,
  },
  product: {
    fontSize: FontSize * 0.9,
    color: Theme.primary,
    textAlign: 'center',
    backgroundColor: '#ED8919' + '44',
    paddingVertical: 1,
    includeFontPadding: false,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 3,
  },
  condition: {
    fontSize: FontSize * 0.9,
    color: '#19C6ED',
    textAlign: 'center',
    backgroundColor: '#19C6ED' + '44',
    includeFontPadding: false,
    paddingVertical: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 3,
  },
});

export default styles;
