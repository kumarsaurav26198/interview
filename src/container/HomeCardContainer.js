import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../redux/action/fetchDataAction';
import MyCard from '../components/MyCard';

const HomeCardContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(0);
  const { data, error, loading } = useSelector((state) => state.fetchDataReducer);

  useEffect(() => {
    dispatch(fetchDataRequest(limit));
  }, [dispatch]); 
  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 1);
    {
      if (limit<5){
        dispatch(fetchDataRequest(limit));
      }
    }

  };

  const renderFooter = () => {
    if (loading) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator animating size="large" color="#007AFF" />
        </View>
      );
    } else if (limit > 4) {
      return (
        <Text style={{textAlign: "center", color: "#000", fontSize: 20, marginBottom: 10}}>---No more data---</Text>
      );
    }
    return null;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={data.images}
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
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
});

export default HomeCardContainer;
