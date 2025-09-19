import AppText from 'components/AppText';
import {ScreenWrapper} from 'components/Wrapper';
import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {logs, vh, vw} from 'utils/Constants.util';
import PlanCard from './PlanCard';
import {Image, View} from 'react-native';
import styles from './styles';
import {AppButton} from 'components/Buttons';
import {Backgrounds} from 'assets/images';
const SubscriptionPlan = ({navigation}) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  function renderItem({item, index}) {
    return (
      <PlanCard
        name={item.plan}
        price={item.amount}
        duration={item.duration}
        selected={selectedPlan === index}
        onPress={() => setSelectedPlan(index)}
      />
    );
  }

  return (
    <ScrollView style={{flex: 1, height: vh * 100}}>
      <Image source={Backgrounds.PlanVector} style={styles.vector} />
      <View style={styles.container}>
        <FlatList
          data={logs}
          renderItem={renderItem}
          // ItemSeparatorComponent={renderListSeparator}
          contentContainerStyle={{marginTop: vh * 4}}
        />
      </View>
      <AppButton
        containerStyle={{
          alignSelf: 'center',
          width: vw * 90,
        }}>
        Proceed to Pay
      </AppButton>
    </ScrollView>
  );
};

export default SubscriptionPlan;
