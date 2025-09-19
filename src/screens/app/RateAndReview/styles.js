import { StyleSheet } from "react-native";
import { vh, vw } from "utils/Constants.util";
import { Theme } from "utils/Theme.util";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: vw * 5
    },
    imageContainer: {
        position: 'relative',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    heartIconContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#fff9',
        borderRadius: 15,
        padding: 8,
    },
    heartIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        tintColor: Theme.white,
    },
    cameraIconContainer: {
        position: 'absolute',
        bottom: 10,
        right: 45,
        backgroundColor: '#fff9',
        borderRadius: 15,
        padding: 8,
    },
    cameraIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    contentContainer: {
        padding: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        color: Theme.text,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        marginLeft: 5,
    },
    location: {
        fontSize: 16,
        marginVertical: 5,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        columnGap: 10,
    },
    categoryItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    checkIconContainer: {
        backgroundColor: '#A71313',
        borderRadius: 10,
        padding: 2,
    },
    checkIcon: {
        width: 5,
        height: 5,
        resizeMode: 'contain',
        tintColor: Theme.white,
    },
    categoryText: {
        fontSize: 12,
        color: Theme.text,
    },
    iconContainer: {
        padding: 5,
        marginLeft: 5,
        borderRadius: 5,
        backgroundColor: '#FF3A3A1A',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 16,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 8,
    },
    tagVendorButton: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8,
        gap: 5,
    },
    tagVendorButtonText: {
        color: Theme.shadowColor,
        fontSize: 14,
    },
    description: {
        fontSize: 10,
        color: Theme.text,
        marginBottom: 16,
    },
    contactInfoContainer: {
        marginTop: 8,
    },
    contactInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    contactIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: Theme.primary,
    },
    contactText: {
        fontSize: 14,
        color: Theme.text,
    },
    priceTag: {
        fontSize: 14,
        color: Theme.statusRed,
        marginBottom: 2,
    },
    price: {
        fontSize: 12,
        color: Theme.text,
    },
    serviceItemContainer: {
        backgroundColor: '#F8F8F8',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 5,
    },
    ratingText: {
        fontSize: 30,
        marginRight: 5,
    },
    reviewCount: {
        fontSize: 10,
        color: '#B0B0B0',
    },
    viewMoreBtn: {
        alignSelf: 'flex-end',
    },
    viewText: {
        color: '#0080FF',
    },
    writeReviewInput: {
        height: vh * 20,
        marginTop: vh * 2,
        backgroundColor: Theme.white,
    },
    postBtn: {
        width: '100%',
    },
});
export default styles;
