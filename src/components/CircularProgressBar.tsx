import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { styles } from '../screens/StyleSheet';

const CircularProgressBar = () => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  // Fixed percentages for each color segment
  const firstSegment = 50;
  const secondSegment = 30;
  const thirdSegment = 20;

  return (
    <View style={styles.containerProgress}>
      <Svg height="100" width="100" viewBox="0 0 100 100">
        {/* Background circle */}
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#d3d3d3"
          strokeWidth="10"
          fill="none"
        />
        {/* First color circle (60%) */}
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#1DCF6F" // Green
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${(firstSegment / 100) * circumference}, ${circumference}`}
          strokeDashoffset={0}
          strokeLinecap="round"
        />
        {/* Second color circle (30%) */}
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#F1A100" // Orange
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${(secondSegment / 100) * circumference}, ${circumference}`}
          strokeDashoffset={-(firstSegment / 100) * circumference}
          strokeLinecap="round"
        />
        {/* Third color circle (10%) */}
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#E2502B" // Red
          strokeWidth="10"
          fill="none"
          strokeDasharray={`${(thirdSegment / 100) * circumference}, ${circumference}`}
          strokeDashoffset={-((firstSegment + secondSegment) / 100) * circumference}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.progressText}>September 2024</Text>
    </View>
  );
};

export default CircularProgressBar;
