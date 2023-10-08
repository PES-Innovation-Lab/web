// pages/Members2.js
import { useEffect, useState } from 'react';
import membersData from '../public/data/members.json';
import Cards from '../components/Cards';
import Layout from '../components/Layout';
function Members() {
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
            const output = membersData;
            const members = [];
            for (const key in output) {
                members.push({ key: key, data: output[key] });
            }
            members.reverse();
            setData({ members: members });
            setDataLoaded(true);
        };
        fetch();
    }, []);

    return (
        <>
            <Layout
                title={'PIL | Members'}
                active={'Members'}
                search={true}
                searchSettings={{ targetClass: 'memberCardContainer', default: 'block' }}
            >
                <h1 className='text-center text-6xl font-bold text-green-800 m-14'>Members</h1>
                <div className="flex min-h-screen items-center justify-center bg-neutral-1000">
                    <div className="grid grid-rows-1 md:grid-rows-3 lg:grid-rows-4">
                        {data.members.map((item) => (
                            <div key={item.key}>
                                <h2 className="pageSubHeader">{item.key}</h2>
                                <div className="grid grid-cols-1 gap-9 md:grid-cols-3 lg:grid-cols-4">
                                    {item.data.members.map((members) => (
                                        <Cards
                                            name={members.name}
                                            pfp={members.picture_url || './images/members/unknown.png'}
                                            course={members.branch}
                                            batch={members.grad_batch}
                                            linkedin={members.linkedin}
                                            gmail={members.email}
                                            github={members.github}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Members;

