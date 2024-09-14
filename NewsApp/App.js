import React from 'react';
import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import BlockCard from './app/components/BlockCard';
import FeaturedNews from './app/components/FeaturedNews';
import SmallCard from './app/components/SmallCard';
import BreakingNews from './app/components/BreakingNews';
import TechNews from './app/components/TechNews';
import FlatCard from './app/components/FlatCard';
import PoliticalNews from './app/components/PoliticalNews';
import EntertainmentNews from './app/components/EntertainmentNews';

import data from './fakeData';

export default function App() {
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const politicalNews = data.filter(item => item.category === 'political');
  const entertainmentNews = data.filter(item => item.category === 'entertainment');
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews item={{
        id: '1',
        title: 'Title 1',
        desc: 'des description description description description description description description description description description description description description description description',
        thumbnail: 'https://cdn.pixabay.com/photo/2016/04/02/04/14/bell-peppers-1302126_1280.jpg',
        category: 'breaking-news',
      }} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  )
}


