console.log([{"name":"\u4e0a\u6d77","value":2.26},{"name":"\u4e91\u5357","value":0.58},{"name":"\u5185\u8499","value":0},{"name":"\u5185\u8499\u53e4","value":0.94},{"name":"\u5317\u4eac","value":17.65},{"name":"\u5409\u6797","value":1.22},{"name":"\u56db\u5ddd","value":4.5},{"name":"\u5929\u6d25","value":0.92},{"name":"\u5b81\u590f","value":0.27},{"name":"\u5b89\u5fbd","value":2.51},{"name":"\u5c71\u4e1c","value":8.79},{"name":"\u5c71\u897f","value":3.3},{"name":"\u5e7f\u4e1c","value":10.66},{"name":"\u5e7f\u897f","value":3.06},{"name":"\u65b0\u7586","value":0.47},{"name":"\u6c5f\u82cf","value":5.33},{"name":"\u6c5f\u897f","value":1.85},{"name":"\u6cb3\u5317","value":5.11},{"name":"\u6cb3\u5357","value":7.9},{"name":"\u6d59\u6c5f","value":3.59},{"name":"\u6d77\u5357","value":0.39},{"name":"\u6e56\u5317","value":2.48},{"name":"\u6e56\u5357","value":3.69},{"name":"\u7518\u8083","value":0.63},{"name":"\u798f\u5efa","value":3.37},{"name":"\u897f\u85cf","value":0.02},{"name":"\u8d35\u5dde","value":0.7},{"name":"\u8fbd\u5b81","value":2.99},{"name":"\u91cd\u5e86","value":1.3},{"name":"\u9655\u897f","value":1.69},{"name":"\u9752\u6d77","value":0.09},{"name":"\u9ed1\u9f99\u6c5f","value":1.74}]);
require.config({
	paths: {
		echarts: '../js/libs/echarts'
	}
});
require(
	[
		'echarts',
		'echarts/chart/bar',
		'echarts/chart/line',
		'echarts/chart/pie',
		'echarts/chart/map'
	],
	function(ec) {
		/////////////////////////////////////////////////////////////
		var mMainWebsiteChar = ec.init(document.getElementById('mMainWebsiteChar'));
		mMainWebsiteChar.setOption({
			tooltip: {
				trigger: 'axis',
				formatter: '{b}<br />累计交易额：{c}亿',
				textStyle: {
					fontFamily: 'Microsoft YaHei'
				},
				axisPointer: {
					lineStyle: {
						width: 2,
						color: '#f48888'
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#333',
						fontFamily: 'Microsoft YaHei',
						fontSize: 13
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#eee',
						width: 1
					}
				},
				splitArea: {
                	show: false
				},
				data: ["2016-11","2016-12","2017-01","2017-02","2017-03","2017-04","2017-05","2017-06","2017-07"]			}],
			yAxis: [{
				type: 'value',
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#333',
						fontFamily: 'Microsoft YaHei',
						fontSize: 13
					},
					formatter: '{value}亿'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#eee',
						width: 1
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: ['rgba(255,255,255,0.3)', 'rgba(248,248,248,0.3)']
					}
				}
			}],
			series: [{
				name: '众信成长之路',
				type: 'line',
				symbol: 'emptyCircle',
				symbolSize: 4,
				smooth: true,
				data: ["129.33","135.27","139.99","145.59","155.61","164.14","171.83","182.44","187.71"],
				itemStyle: {
					normal: {
						color: '#f48888',
						areaStyle: {
							color: 'rgba(253,112,112,0.5)'
						}
					}
				}
			}]
		});
		/////////////////////////////////////////////////////////////
		var mMainWebsiteChar2 = ec.init(document.getElementById('mMainWebsiteChar2'));
		mMainWebsiteChar2.setOption({
			tooltip: {
				formatter: '{b}：{c}%',
				textStyle: {
					fontFamily: 'Microsoft YaHei'
				}
			},
			dataRange: {
				show: false,
				min: 0,
				max: 100,
				x: 'left',
				y: 'bottom',
				color: ['#e34a4a','#fce9e6'],
				text: ['高','低'],
				calculable: true
			},
			series: [
				{
					name: '用户地区',
					type: 'map',
					mapType: 'china',
					roam: false,
					itemStyle: {
						normal: {
							label: {
								show: true,
								textStyle: {
									fontFamily: 'Microsoft YaHei'
								}
							}
						},
						emphasis: { 
                    	color: '#d52727',
                    	label: {
                        	show: true,
                        	textStyle: {
                            	color: '#fff'
                        	}
                    	}}
					},
					data: [{"name":"\u4e0a\u6d77","value":2.26},{"name":"\u4e91\u5357","value":0.58},{"name":"\u5185\u8499","value":0},{"name":"\u5185\u8499\u53e4","value":0.94},{"name":"\u5317\u4eac","value":17.65},{"name":"\u5409\u6797","value":1.22},{"name":"\u56db\u5ddd","value":4.5},{"name":"\u5929\u6d25","value":0.92},{"name":"\u5b81\u590f","value":0.27},{"name":"\u5b89\u5fbd","value":2.51},{"name":"\u5c71\u4e1c","value":8.79},{"name":"\u5c71\u897f","value":3.3},{"name":"\u5e7f\u4e1c","value":10.66},{"name":"\u5e7f\u897f","value":3.06},{"name":"\u65b0\u7586","value":0.47},{"name":"\u6c5f\u82cf","value":5.33},{"name":"\u6c5f\u897f","value":1.85},{"name":"\u6cb3\u5317","value":5.11},{"name":"\u6cb3\u5357","value":7.9},{"name":"\u6d59\u6c5f","value":3.59},{"name":"\u6d77\u5357","value":0.39},{"name":"\u6e56\u5317","value":2.48},{"name":"\u6e56\u5357","value":3.69},{"name":"\u7518\u8083","value":0.63},{"name":"\u798f\u5efa","value":3.37},{"name":"\u897f\u85cf","value":0.02},{"name":"\u8d35\u5dde","value":0.7},{"name":"\u8fbd\u5b81","value":2.99},{"name":"\u91cd\u5e86","value":1.3},{"name":"\u9655\u897f","value":1.69},{"name":"\u9752\u6d77","value":0.09},{"name":"\u9ed1\u9f99\u6c5f","value":1.74}]}
			]
		});
		/////////////////////////////////////////////////////////////
		var mMainWebsiteChar3 = ec.init(document.getElementById('mMainWebsiteChar3'));
		mMainWebsiteChar3.setOption({
			tooltip: {
				trigger: 'axis',
				formatter: '{b}：{c}%',
				textStyle: {
					fontFamily: 'Microsoft YaHei'
				},
				axisPointer: {
					type: 'shadow'
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#333',
						fontFamily: 'Microsoft YaHei',
						fontSize: 13
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#eee',
						width: 1
					}
				},
				splitArea: {
                	show: false
				},
				data: ["\u9ed1\u9f99\u6c5f","\u6cb3\u5357","\u5e7f\u897f","\u5409\u6797","\u5c71\u897f","\u5c71\u4e1c","\u5176\u5b83"]	
			}],
			yAxis: [{
				type: 'value',
				axisLine: {
					show: false
				},
				axisLabel: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#eee',
						width: 1
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: ['rgba(255,255,255,0.3)', 'rgba(248,248,248,0.3)']
					}
				}
			}],
			series: [{
				name: '借款人地区',
				barWidth: 40,
				type: 'bar',
				itemStyle: {
					normal: {
						color: function(params) {
							var colorList = ['#f2711a', '#f9c118','#ec242c', '#b3216d', '#5c3991', '#01a9ae', '#abbe34'];
							return colorList[params.dataIndex]
						},
						label: {
							show: true,
							textStyle: {
								fontSize: '13',
								fontFamily: '微软雅黑'
							},
							formatter: '{c}%'
						}
					}
				},
				data: [34.88,28.06,9.91,5.64,4.72,4.12,12.67]			}]
		});
		/////////////////////////////////////////////////////////////
		var mMainWebsiteChar4 = ec.init(document.getElementById('mMainWebsiteChar4'));
		mMainWebsiteChar4.setOption({
			color: ['#f2711a', '#f9c118','#ec242c', '#b3216d', '#5c3991', '#01a9ae', '#abbe34'],
			legend: {
				orient: 'vertical',
				x: 'right',
				y: 'center',
				data: ['1次', '2-5次', '5-10次', '10次以上'],
				textStyle: {
					fontFamily: 'Microsoft YaHei',
					fontSize: '13'
				}
			},
			tooltip: {
				show: true,
				formatter: '{b}：{d}%',
				textStyle: {
					fontFamily: 'Microsoft YaHei'
				}	
			},
			calculable: true,
			series: [{
				name: '投资次数',
				type: 'pie',
				center: ['40%', '50%'],
				radius: [50, 80],
				itemStyle: {
					normal: {
						label: {
							show: true,
							textStyle: {
								fontFamily: 'Microsoft YaHei',
								fontSize: '13'
							}
						},
						labelLine: {
							show: true
						}
					},
					emphasis: {
						label: {
							show: true,
							position: 'center',
							formatter: '{d}%',
							textStyle: {
								fontFamily: 'Microsoft YaHei',
								fontSize: '13'
							}	
						}
					}	
				},
				data: [
					{name: '1次', value: 26330},
					{name: '2-5次', value: 8640},
					{name: '5-10次', value: 3374},
					{name: '10次以上', value: 9593}
				]
			}]
		});
		/////////////////////////////////////////////////////////////
		var mMainWebsiteChar5 = ec.init(document.getElementById('mMainWebsiteChar5'));
		mMainWebsiteChar5.setOption({
			tooltip: {
				trigger: 'axis',
				formatter: '{b}：{c}%',
				textStyle: {
					fontFamily: 'Microsoft YaHei'
				},
				axisPointer: {
					type: 'shadow'
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#333',
						fontFamily: 'Microsoft YaHei',
						fontSize: 13
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#eee',
						width: 1
					}
				},
				splitArea: {
                	show: false
				},
				data: ['25岁以下', '25-35岁', '35-45岁', '45-60岁', '60岁以上']
			}],
			yAxis: [{
				type: 'value',
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#333',
						fontFamily: 'Microsoft YaHei',
						fontSize: 13
					},
					formatter: '{value}%'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: '#eee',
						width: 1
					}
				},
				splitArea: {
					show: true,
					areaStyle: {
						color: ['rgba(255,255,255,0.3)', 'rgba(248,248,248,0.3)']
					}
				}
			}],
			series: [{
				name: '投资人年龄',
				barWidth: 56,
				type: 'bar',
				itemStyle: {
					normal: {
						color: function(params) {
							var colorList = ['#f2711a', '#f9c118','#ec242c', '#b3216d', '#5c3991', '#01a9ae', '#abbe34'];
							return colorList[params.dataIndex]
						},
						label: {
							show: true,
							textStyle: {
								fontSize: '13',
								fontFamily: '微软雅黑'
							},
							formatter: '{c}%'
						}
					}
				},
				data: [14.87,44.28,20.45,15.32,5.09]			}]
		});
		/////////////////////////////////////////////////////////////
		
		/////////////////////////////////////////////////////////////
	}
);