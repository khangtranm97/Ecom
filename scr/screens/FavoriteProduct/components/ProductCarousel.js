import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const ProductCarousel = (item) => {
  let _carousel = null;
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItem = [
    {
      title: 'item1',
      url: require('../../../assets/image/AirMax97.png'),
    },
    {
      title: 'item2',
      url: require('../../../assets/image/AirMax97_1.png'),
    },
    {
      title: 'item3',
      url: require('../../../assets/image/AirMax97_2.png'),
    },
    {
      title: 'ite4',
      url: require('../../../assets/image/AirMax97_3.png'),
    },
    {
      title: 'item5',
      url: require('../../../assets/image/AirMax97_4.png'),
    },
    {
      title: 'item6',
      url: require('../../../assets/image/AirMax97_5.png'),
    },
  ];
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slider}>
        <Image source={item.url} style={styles.slideImage} />
      </View>
    );
  };
  const systemWidth = Dimensions.get('window').width;
  const _slideWidth = systemWidth;
  return (
    <View style={styles.container}>
      <Carousel
        ref={c => {
          _carousel = c;
        }}
        data={carouselItem}
        renderItem={_renderItem}
        sliderWidth={systemWidth}
        itemWidth={systemWidth}
        onSnapToItem={index => setActiveSlide(index)}
        autoplay={true}
        autoplayDelay={1000}
        loop={true}
      />
      <Pagination
        dotsLength={carouselItem.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          width: 32,
          height: 10,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          backgroundColor: '#40BFFF',
        }}
        inactiveDotStyle={{
          backgroundColor: '#EBF0FF',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default ProductCarousel;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    alignSelf: 'center',
  },
  slider: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  slideImage: {
    width: Dimensions.get('window').width,
    height: 238,
    alignSelf: 'center',
  },
});
