import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const HomeCarousel = () => {
  let _carousel = null;
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselItem = [
    {
      title: 'item1',
      url: require('../../../assets/image/PromotionImage.png'),
    },
    {
      title: 'item2',
      url: require('../../../assets/image/PromotionImage1.png'),
    },
    {
      title: 'item3',
      url: require('../../../assets/image/PromotionImage2.png'),
    },
    {
      title: 'ite4',
      url: require('../../../assets/image/PromotionImage3.png'),
    },
    {
      title: 'item5',
      url: require('../../../assets/image/PromotionImage4.png'),
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
  const _slideWidth = systemWidth - 20;
  return (
    <View style={styles.container}>
      <Carousel
        ref={c => {
          _carousel = c;
        }}
        data={carouselItem}
        renderItem={_renderItem}
        sliderWidth={_slideWidth}
        itemWidth={_slideWidth}
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
          height: 18,
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

export default HomeCarousel;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
  slider: {
    width: Dimensions.get('window').width - 20,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  slideImage: {
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 5,
  },
});
