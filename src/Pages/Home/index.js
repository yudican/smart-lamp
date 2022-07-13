import React, {useEffect} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import CardItemBox from '../../Components/Atoms/CardItemBox';
import allActions from '../../Config/Redux/Actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {getLightControl, setLightOn} = allActions.controlAction;
  const {control} = useSelector(state => state);

  const {isLightOn} = control;

  useEffect(() => {
    dispatch(getLightControl());
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#f5f6fa'}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#130f40'} />
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.headerContentTitle}>Selamat Datang</Text>
              <Text style={styles.headerContentSubTitle}>
                Di Aplikasi Kontrol Lampu
              </Text>
            </View>
            {/* <ProfileImage source={{uri: profile_photo}} /> */}
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.cardContent}>
            <CardItemBox
              name="lightbulb"
              label="Lampu 1"
              iconColor={isLightOn?.lampu1 ? '#fdcb6e' : '#000'}
              Icon={FontAwesome5}
              onPress={() => dispatch(setLightOn(!isLightOn.lampu1, 'lampu1'))}
            />
            <CardItemBox
              name="lightbulb"
              label="Lampu 2"
              iconColor={isLightOn?.lampu2 ? '#fdcb6e' : '#000'}
              Icon={FontAwesome5}
              onPress={() => dispatch(setLightOn(!isLightOn.lampu2, 'lampu2'))}
            />
            <CardItemBox
              name="lightbulb"
              label="Lampu 3"
              iconColor={isLightOn?.lampu3 ? '#fdcb6e' : '#000'}
              Icon={FontAwesome5}
              onPress={() => dispatch(setLightOn(!isLightOn.lampu3, 'lampu3'))}
            />
            <CardItemBox
              name="lightbulb"
              label="Lampu 4"
              iconColor={isLightOn?.lampu4 ? '#fdcb6e' : '#000'}
              Icon={FontAwesome5}
              onPress={() => dispatch(setLightOn(!isLightOn.lampu4, 'lampu4'))}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  headerContainer: {
    backgroundColor: '#130f40',
    height: hp(25),
  },
  headerContent: {
    marginTop: hp(5),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContentTitle: {fontSize: hp(2.2), color: '#fff'},
  headerContentSubTitle: {fontSize: hp(2.5), fontWeight: 'bold', color: '#fff'},
  contentContainer: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    borderTopLeftRadius: hp(2),
    borderTopRightRadius: hp(2),
    marginTop: -hp(4),
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp(3),
    paddingTop: hp(2),
    flexWrap: 'wrap',
    marginBottom: hp(2),
  },
});

export default Home;
