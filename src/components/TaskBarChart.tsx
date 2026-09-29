import React from 'react';
import { View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const TaskBarChart = () => {
  // Reversed data for right alignment
  const data = {
    labels: ['F', 'T', 'W', 'T', 'M', 'S'],
    datasets: [
      {
        data: [5, 8, 4, 5, 6, 2],
        colors: [
          () => '#E1E9FF', // Use solid color without opacity
          () => '#E1E9FF',
          () => '#E1E9FF',
          () => '#567DF4', // Highlighted bar for Tuesday (T)
          () => '#E1E9FF',
          () => '#E1E9FF',
        ],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#F6F6F6',
    backgroundGradientTo: '#F6F6F6',
    color: () => `#567DF4`,
    barPercentage: 0.7,
    decimalPlaces: 0,
    strokeWidth: 0,
    fillShadowGradient: '#567DF4',
    fillShadowGradientOpacity: 1,
    useShadowColorFromDataset: false,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View>
      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
        showBarTops={false}
        withVerticalLabels={true}
        withHorizontalLabels={true}
        fromZero={true}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        flatColor={true}
      />
    </View>
  );
};

export default TaskBarChart;
