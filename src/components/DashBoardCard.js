import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;
const cardWidth = Math.min((screenWidth - 89) / 2, 200); // Ensures cards are responsive but do not exceed a max width

export const CardGroup = ({ cardData = [],style,containerStyle }) => {
    return (
        <View style={styles.cardGroupContainer}>
            {cardData.map((card, index) => (
                <DashboardCard key={index} text={card.text} icon={card.icon} stats={card?.stats} style={style} containerStyle={containerStyle} />
            ))}
        </View>
    );
};

export const DashboardCard = ({ text, icon, stats,style,containerStyle }) => {
    return (
        <View style={[styles.cardContainer,containerStyle]}>
            {icon && <Icon name={icon} size={24} color={'#007BFF'} style={styles.iconStyle} />}
            <View style={[{
                flexDirection:'row',
                justifyContent: 'space-between',
                flex: 1,
                marginLeft: 30,
            }]}>
                <Text style={[styles.cardText,style]}>{text}</Text>
                <Text style={[styles.statsText,style]}>{stats}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 12,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        // flex:1
    },
    cardText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'left',
    },
    statsText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'left',
    },
    cardGroupContainer: {
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 8,
    },
    iconStyle: {
        marginRight: 5,
    },
});