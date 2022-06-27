import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const systemWidth = Dimensions.get('window').width;
const _slideWidth = systemWidth;

const ProductDetailCarousel = ({data}) => {
  let _carousel = null;
  const [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({item, id}) => {
    return (
      <View style={styles.slider}>
        <Image
          source={typeof item == 'string' ? {uri: item} : item}
          style={styles.slideImage}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        ref={c => {
          _carousel = c;
        }}
        data={data.url}
        renderItem={_renderItem}
        sliderWidth={systemWidth}
        itemWidth={systemWidth}
        onSnapToItem={index => setActiveSlide(index)}
        autoplay={true}
        autoplayDelay={1000}
        loop={true}
      />
      <Pagination
        dotsLength={data.url.length}
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

export default ProductDetailCarousel;

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
    resizeMode: 'contain',
  },
});
