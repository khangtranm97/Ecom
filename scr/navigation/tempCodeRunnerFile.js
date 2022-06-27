header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);

          return title === 'Home' ? (
            <MyHeader
              homeScreen={<HomeHeader />}
              leftButton={
                back ? (
                  <MyBackButton
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ) : undefined
              }
            />
          ) : (
            <MyHeader
              title={title}
              leftButton={
                back ? (
                  <MyBackButton
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                ) : undefined
              }
              style={options.headerStyle}
            />
          );
        },