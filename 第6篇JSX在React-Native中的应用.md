#React-Native入门指南
##第六篇JSX在React-Native中的应用



###一、JSX概述
	你一定疑问为什么要用JSX？其实这不是必需，而是建议。只是因为React是作为MVC中的V,是为UI而生，所以，React-Native使用JSX更能像HTML样表达树形结构，其实HTML的超类就是XML,React-Native将这个带到了解放前，不可否认的是JSX相比节省了很多的代码。JSX不是什么新奇的东西，JSX只是对JavaScript进行了拓展，仅此而已。
###二、语法介绍
	1、类XML UI组件表达，在React-Native中表现为：
	render: function() {
    	return (
      		<View style={styles.container}>
        		<Text style={styles.welcome}>
          			Welcome to React Native!
        		</Text>
      		</View>
    	);
    }
    
    2、js表达式
    在JSX中，表达式需要｛｝包裹，例如：
    render: function() {
    	return (
      		<View style={styles.container}>
        		<Text style={styles.welcome}>
        			{0? '第一段': '第二段'}
        		</Text>
      		</View>
    	);
    }
    上面的代码我们可以看出，style＝｛｝是一个表达式；{0? '第一段': '第二段'}是表达式，最后显示的应该是“第二段”。
    
    3、属性
    在HTML中，属性可以是任何值，例如：<div tagid="00_1"></div>,tagid就是属性；同样，在组件上可以使用属性。
    建议使用以下方式：
    var props = {
    	tagid: 'GGFSJGFFATQ',
    	poiname: '东方明珠'
    };
    return (<View {...props}></View>);
    
    4、如果需要在调用组件的时候动态增加或者覆盖属性，又该如何呢？
    很简单：<View {...props} poiname={'虹桥机场'}></View>
    
    5、关于样式
    （1）普通内联样式:{{}},第一层｛｝是表达式，第二层｛｝是js对象；
    <View style={{fontSize:40, width:80,}}> </View>
    （2）调用样式表:{样式类.属性}
    <View style={styles.container}></View>
    （3）样式表和内联样式共存:{[]}
    <View style={[styles.container, {fontSize:40, width:80}]}>
    （4）多个样式表:{[样式类1， 样式类2]}
    <View style={[styles.container, styles.color]}>
    
    6、属性校验
    为了实现强类型语言的效果，我们可以使用propTypes来声明数据属性的合法性校验。例如：
    React.createClass({
    	porpTypes:{
    		username: React.PropTypes.string,
    		age: React.propTypes.number,
    	}
    });
    
    7、设定默认属性
    React.createClass({
    	getDefaultProps: function(){
    		return {
    			sign: '这个家伙很懒，什么都没留下'
    		};
    	}
    });
    
    8、组件的生命周期
    componentWillMount：组件创建之前
    getInitialState：初始化状态
    render：渲染视图
    componentDidMount：渲染视图完成后
    componentWillUnmount：组件被卸载之前
    
###三、了解虚拟DOM
	React进行了虚拟DOM的封装，所有的视图的更新都是虚拟DOM做了一个校验（diff）后最小更新。为什么这么做，因为现在机器的内存已经足以支撑这样视图UI的diff计算，用内存计算换取UI渲染效率。
	
	1、我们需要获取组件中真实的dom
	React.findDOMNode(component)
	
	2、第二节已经简单说了组件的生命周期（will, did）
	组件的生命周期分为3个部分：
	Mounting：正在装载组件；
	Updating：重新计算渲染组件；
	Unmounting：卸载组件
	
	
	
	
	
	
    