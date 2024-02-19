import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../redux/action/fetchDataAction';
import MyCard from '../components/MyCard';
import ErrorModal from '../components/ErrorModal';
import CustomButton from '../components/CustomButton';

const HomeCardContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(0);
  const [homeData, setHomeData] = useState([]);
  const { data, error, loading } = useSelector((state) => state.fetchDataReducer);

  useEffect(() => {
    dispatch(fetchDataRequest(limit));
  }, [dispatch, limit]);

  useEffect(() => {
    if (data && data?.images) {
      const newData = data?.images.filter(newItem => !homeData?.some(oldItem => oldItem.id === newItem.id));
      setHomeData(prevData => [...prevData, ...newData]);
    }
  }, [data]);
  
  homeData.sort((a, b) => a.id - b.id);

  const handleLoadMore = () => {
    if (!loading && limit < 5) {
      setLimit(prevLimit => prevLimit + 1);
    }
  };

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator animating size="large" color="#007AFF" />;
    } else if (limit > 4 || !data?.images || data?.images?.length === 0) {
      return <Text style={{ textAlign: "center", color: "#000", fontSize: 20, marginBottom: 10 }}>---No more data---</Text>;
    } else {
      return (
        <View style={styles.footer}>
          <CustomButton
            title="Load More.."
            onPress={handleLoadMore}
            color="white"
            backgroundColor="#3b71f3"
          />
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {error ? (
        <ErrorModal isError={true} Message={error?.message} />
      ) : (
        <FlatList
          data={homeData}
          renderItem={({ item }) => {
            const imageUri = item.xt_image.replace(/^http:/, 'https:');
            return (
              <MyCard
                title={item.id}
                imageUri={imageUri}
                onPress={() => {
                  navigation.navigate("Details", { itemId: item.id, imageUrl: imageUri });
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          showsVerticalScrollIndicator={false} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: "center",
    marginHorizontal: 40,
    marginBottom: 20
  },
});

export default HomeCardContainer;
