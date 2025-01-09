import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Player {
  name?: string;
  goals?: number | null;
}

export default function HomeScreen() {
  //Lưu trữ tổng số bàn thắng của tất cả các cầu thủ
  const [totalGoals, setTotalGoals] = useState(0);
  //Lưu trữ thông tin của cầu thủ ghi bàn nhiều nhất
  const [topScorer, setTopScorer] = useState<Player>({ name: '', goals: 0 });
  //Lưu trữ danh sách các cầu thủ hợp lệ
  const [validPlayers, setValidPlayers] = useState<Player[]>([]);


  useEffect(() => {
    //Danh sách các cầu thủ
    const players: (Player | undefined)[] = [
      { name: 'Messi', goals: 30 },
      undefined,
      { name: 'Ronaldo', goals: 28 },
      { name: 'Neymar', goals: 22 },
      { goals: 2 },
      { name: 'Mbappé', goals: 25 },
      { name: 'Pele', goals: null },
    ];
    //Kiểm tra cầu thủ có hợp lệ không
    const validRule = ({ name, goals }: Player = {}) => {
      return !!name && goals != null;
    };
    //Lọc ra danh sách cầu thủ hợp lệ
    const validPlayers = players.filter(validRule);
    setValidPlayers(validPlayers);


    //Tính tổng số bàn thắng của tất cả các cầu thủ
    const totalGoals = validPlayers.reduce((sum, player) => sum + (player?.goals ?? 0), 0);
    setTotalGoals(totalGoals);
    //Tìm cầu thủ ghi bàn nhiều nhất
    const topScorer = validPlayers.reduce((max, player) => (player?.goals! > (max.goals ?? 0) ? player : max), { name: '', goals: 0 } as Player);
    setTopScorer(topScorer);
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Nguyễn Kim Thông!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="subtitle">PH48198</ThemedText>
      <ThemedView style={styles.statsContainer}>

        <ThemedText type="defaultBold" style={styles.sectionTitle}>Người ghi nhiều bàn thắng nhất:</ThemedText>
        <ThemedText type="default" style={styles.playerText}>{topScorer.name} với {topScorer.goals} bàn thắng</ThemedText>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  statsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
  },
  playerText: {
    marginBottom: 4,
    fontSize: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});