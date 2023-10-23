'use client'
import { useSearchParams } from '@/node_modules/next/navigation'
import {FaUmbrellaBeach} from 'react-icons/fa'
import CategoriesItem from './CategoriesItem'
export const categories = [
    {
        name: 'Tatil-Köyü',
        icon: FaUmbrellaBeach
    },
    {
        name: 'Kamp',
        icon: FaUmbrellaBeach
    },
    {
        name: 'Villa',
        icon: FaUmbrellaBeach
    },
    {
        name: 'Otel',
        icon: FaUmbrellaBeach
    },
]
function Categories() {
    const params = useSearchParams();
    const urlItem = params.get('category');
  return (
    <div className='flex items-center gap-7'>
        {categories.map((cat, i)=>(
            <CategoriesItem 
                key={i}
                name= {cat.name}
                icon= {cat.icon}
                selected= {urlItem == cat.name}
            />
        )

        )}
    </div>
  )
}

export default Categories