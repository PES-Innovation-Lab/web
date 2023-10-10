// pages/Members2.js
import { useEffect, useState } from 'react';
import membersData from '../public/data/members.json';
import MemberCard from '../components/MemberCard';
import LayoutAlt from '../components/LayoutAlt';

function Members() {
    const [currentYear, setCurrentYear] = useState(2023);
    const years = [2023, 2022, 2020, 2019, 2018, 2017, 2016, 2015];
    const yearElements = years.map((year, ind) => {
    return (
      <button
        key={ind}
        onClick={() => setCurrentYear(year)}
        className={`${year == currentYear ? 'text-lab-green font-bold' : ''}`}
      >
        {year}
      </button>
    );
  });
    const [data, setData] = useState({ members: [] });
    const [isDataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            // const result = await fetch('https://api-vercel-mlabwebdev.vercel.app/members');
            // const result = await fetch('/data/members.json');
            if ((await result.status) !== 200) {
                alert('API Error. Try again later');
            } else {
                const output = await result.json();
                const members = [];
                for (const key in output) {
                    members.push({ key: key, data: output[key] });
                }
                members.reverse();
                setData({ members: members });
            }
            setDataLoaded(true);
        };
        // fetchData();

        const fetch = () => {
            const output = membersData[currentYear.toString()].members;
            setData({ members: output });
            setDataLoaded(true);
        };
        fetch();
    }, [currentYear]);

    return (
        <>
            <LayoutAlt title={'PIL | Members'}  active={'Members'} search={false}>
            <div className="pb-20 pt-4 px-12 flex gap-10 flex-col mt-10">
                <div className="flex items-center justify-between">
                    <div className='font-martian-mono text-4xl text-lab-green'>MEMBERS</div>
                    <div className="text-gray-400 flex gap-4 text-lg border-2 border-lab-green p-2 rounded-md">
                        {yearElements}
                    </div> 
                </div>
            </div>
                <div className="flex min-h-screen items-center justify-center bg-neutral-1000">
                    <div className="flex flex-wrap justify-center">
                        <div className="grid grid-cols-1 gap-9 md:grid-cols-3 lg:grid-cols-4">  
                        {data.members.map((member, index) => (
                            <MemberCard
                                key={index}
                                name={member.name}
                                pfp={member.picture_url || './images/members/unknown.png'}
                                course={member.branch}
                                batch={member.grad_batch}
                                linkedin={member.linkedin}
                                gmail={member.email}
                                github={member.github}
                            />
                        ))}
                        </div>
                    </div>
                </div>
            </LayoutAlt>
        </>
    )
}
export default Members;
