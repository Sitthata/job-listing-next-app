"use client";
import { CardType } from '@/types/cardType';
import data from '../data.json';
import Card from './card';
import { useEffect } from 'react';

export default function CardList() {
    const testCardData: CardType = data[0];
    return (
      <div className='mx-2 flex flex-col gap-8'>
        {data.map((cardData, index) => (
          <Card {...cardData} key={index} />
        ))}
      </div>
    )
}
    