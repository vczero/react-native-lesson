

var React = require('react-native');
var Index = require('./pages/Index');

var {
    NavigatorIOS,
	  AppRegistry,
    StyleSheet,
} = React;

var NV = React.createClass({
    render: function(){
      return(
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: '首页',
              component: Index,
            }}
            />
      );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('HelloWorld', () => NV);