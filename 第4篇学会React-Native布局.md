#React-Native入门指南
##第4篇React-Native布局实战
	前辈教导我们，掌握一门新技术的最快方法是练习。因此，我找了下比较有爱，暖气的界面。当然不是给美团打广告了，只是觉得页面蛮清新的。下面就是要显示的效果：
![美团](pic/4_1.png)

	第三篇文章基本上对React-Native的布局基本上有个大致的认识，现在开工吧。总体上，该页面分三个部分：（1）我们约会吧及其右边3栏；（2）1元吃大餐及其底下的4栏；（3）红火来袭的三栏。
	
####一、实现第一部分
	1、首先，我们创建一个项目
	现在我们需要创建一个React-Native的项目，因此可以按照下面的步骤：
	打开终端，开始React-Native开发的旅程吧。
	(1)安装命令行工具(已经安装了就不用再安装了)：sudo npm install -g react-native-cli
	(2)创建一个空项目：react-native init HelloWorld
	(3)找到创建的HelloWorld项目,双击HelloWorld.xcodeproj即可在xcode中打开项目。xcodeproj是xcode的项目文件。
	(4)在xcode中，使用快捷键cmd + R即可启动项目。
	
	2、清除其余多余的代码,剩下的代码如下：
	/**
	* Sample React Native App
	* https://github.com/facebook/react-native
	*/
	'use strict';

	var React = require('react-native');
	var {
  		AppRegistry,
  		StyleSheet,
  		Text,
  		View,
	} = React;


	var HelloWorld = React.createClass({
  		render: function() {
    		return (
      			<View></View>
    		);
  		}
	});
	var styles = StyleSheet.create({
  
	});


	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
	
	3、此时，除了闪屏外，看到应该是空白的页面。开工，分析页面：
	（1）大致有4个板块
	（2）先是左右两栏(1/3和2/3)；后是上下两栏(1/2)。我们先用View组件布局。
![美团](pic/4_2.png)
	
	4、完成初步布局
	看如下代码，应该很清楚了，View里面嵌入并列的两栏。
![美团](pic/4_3.png)	
	
	实现效果如下：
![美团](pic/4_4.png)	
	
	5、添加内部图片和文字
	其实做这种布局，还是有很多的细节，粗糙的效果如下,这块代码暂时不贴了，最后一并贴出来：
![美团](pic/4_5.png)		

####二、按照第一部分原理，完成整个页面
	完成的效果如下：
![美团](pic/4_6.png)		
	
	整个代码如下：
	/**
 	* Sample React Native App
 	* https://github.com/facebook/react-native
 	*/
	'use strict';

	var React = require('react-native');
	var {
  		AppRegistry,
  		StyleSheet,
  		Text,
  		View,
  		Image,
	} = React;


	var HelloWorld = React.createClass({
  		render: function() {
    		return (
      			<View style={{}}>
        			<View style={[styles.height160, styles.row,]}>
            		<View style={[styles.height160, styles.part_1_left,]}>
              		<Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>我们约吧</Text>
              		<Text style={[styles.font10, styles.marTop14, styles.marLeft10]}>恋爱家人好朋友</Text>
              		<Image style={[styles.yue]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
            	</View>
            	<View style={[styles.height160, styles.part_1_right,]}>
              	<View style={[styles.row, {flex:1}]}>
                <View style={{flex:1}}>
                  <Text style={[styles.font14, {marginLeft:30}, styles.red]}>超低价值</Text>
                  <Text style={[styles.font14, {fontSize:12, marginTop:14, marginLeft:30,color: 'black'}]}>十元惠生活</Text>
                </View>
                <View style={[{flex:1}, {marginTop:-13}]}>
                  <Image style={[styles.hanbao]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
                </View>
              </View>
              <View style={[{flex:1, flexDirection: 'row',borderTopWidth:0.5, borderColor:'#DDD8CE'}]}>
                <View style={{flex:1, borderRightWidth:1, borderColor:'#DDD8CE',}}>
                    <Text style={{color:'#F742AB', marginLeft:5,fontWeight:'bold', fontSize:15, marginTop:8}}>聚餐宴请</Text>
                    <Text style={{fontSize:12,marginTop:4, marginLeft:5}}>朋友家人常聚聚</Text>
                    <Image style={{height:25,width:25, alignSelf: 'center'}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
                </View>
                <View style={{flex:1,}}>
                    <Text style={[styles.font14,{color:'#FF8601', marginTop:8, marginLeft:5}]}>名店抢购</Text>
                    <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>还有</Text>
                    <Text style={[{marginLeft:5, fontSize:12,marginTop:4,}]}>12:06:12分</Text>
                </View>
              </View>
            </View>
        </View>
        <View>
          <View style={{borderBottomWidth:1,borderTopWidth:1, borderColor:'#DDD8CE', marginTop:40,height:65, flexDirection: 'row',paddingTop:10}}>
            <View style={[{flex:1}]}>
                <Text style={{fontSize:17, color:'#FF7F60', fontWeight:'900', marginLeft:7}}>一元吃大餐</Text>
                <Text style={{marginLeft:7, fontSize:12, marginTop:3}}>新用户专享</Text>
            </View>
            <View style={{flex:1}}>
                <Image style={{height:50, width:120}} source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}></Image>
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row',}}>
            <View style={[styles.row, {borderColor:'#DDD8CE', borderRightWidth:1}]}>
              <View style={{flex:1,}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>撸串节狂欢</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>烧烤6.6元起</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'}}></Image>
              </View>
            </View>
            <View style={styles.row}>
              <View style={{flex:1}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>毕业旅行</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>选好酒店才安心</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}></Image>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row',}}>
            <View style={[styles.row, {borderColor:'#DDD8CE', borderRightWidth:1,  marginLeft:1},]}>
              <View style={{flex:1}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>0元餐来袭</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>免费吃喝玩乐购</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}></Image>
              </View>
            </View>
            <View style={styles.row}>
              <View style={{flex:1}}>
                <Text style={{fontSize:17, color:'#EA6644', fontWeight:'bold', marginLeft:7}}>热门团购</Text>
                <Text style={{fontSize:12, color:'#97979A', marginTop:3, marginLeft:7}}>大家都在买什么</Text>
              </View>
              <View style={{flex:1}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'}}></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  	}
  	});
  	
	
	var styles = StyleSheet.create({
  		row:{
    	flexDirection: 'row',
    	paddingTop:20
  	},
  	marTop18:{
    	marginTop:18,
  	},
  	marTop14:{
    	marginTop:14,
  	},
  	font14:{
    	fontSize:14,
  	},
  	font10:{
    	fontSize:12,
  	},
  	height160:{
    	height: 160
  	},
  	yue:{
    	height:80,
  	},
  	green:{
    	color:'#55A44B',
    	fontWeight: '900'
  	},
  	red:{
    	color: '#FF3F0D',
    	fontWeight: '900'
  	},
  	marLeft10:{
    	marginLeft:10,
  	},
  	part_1_left:{
   	 	flex: 1,
    	borderColor: '#DCD7CD',
    	borderRightWidth: 0.5,
   		borderBottomWidth: 1,
  	},
  	part_1_right:{
    	flex:2,
    	borderColor: '#DCD7CD',
    	borderBottomWidth: 1,
  	},
  	hanbao:{
    	height:55,
    	width:55
  	}
	});


	AppRegistry.registerComponent('HelloWorld', () => HelloWorld);




	
	