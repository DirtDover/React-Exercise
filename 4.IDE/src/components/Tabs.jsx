import React from 'react'
import { useSelector } from 'react-redux';
import CodeTabs from './CodeTabs'
import ButtonTab from './ButtonTab';
import Preview from './Preview';
import { useState } from 'react';

export default function Tabs() {

  const tabs = useSelector(state => state.tabs)
  const previewData = useSelector(state => state.preview)
  const [tabIndex, setTabIndex] =useState(tabs[0].id)
  console.log(tabs);

  return (
    <div className='flex grow'>
        <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
          {tabs.map(tab => (
            <ButtonTab 
            key={tab.id}
            id={tab.id}
            toggleTab={id => setTabIndex(id)}
            imgURL={tab.imgURL}
            buttonContent={tab.buttonContent}
            />
          ))} 
        </div>
        <div className="w-full grow relative">
            <CodeTabs 
            id={tabIndex}
            code={tabs.find(obj => obj.id === tabIndex).code}

            />
            {previewData.preview && <Preview /> }
        </div>
    </div>
  )
}
