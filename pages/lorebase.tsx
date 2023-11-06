import '../src/styles/colors.css';
import '../src/styles/globals.css';

import ComponentsLayout from '@/app/components/layout';
import Characters from '@/app/components/Characters'

// pages/about.tsx
export default function Lorebase() {
  return (
    <ComponentsLayout>
      <div className='mt-12 min-h-[500px] bg-white px-12 pt-20 md:mx-40'>
        <Characters />
      </div>
    </ComponentsLayout>
  );
}
