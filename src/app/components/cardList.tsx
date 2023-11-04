"use client";
import data from '@/app/data.json';
import Card from '@/app/components/card';

export default function CardList() {
    return (
      <div className='mx-2 flex flex-col gap-8'>
        {data.map((cardData, index) => (
          <Card {...cardData} key={index} />
        ))}
      </div>
    )
}
    