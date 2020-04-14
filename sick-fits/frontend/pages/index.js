//Don't need to import React as Next.js handles that for you
//import React from 'react';
import Link from 'next/link'

//Stateless functional component is more desirable here:
const Home = props => (
    <div>
        <p>Hey!</p>
    </div>
)

export default Home;

// Versus Class Component
// class Home extends React.Component {
//     render() {
//         return (
//             <div className='home'>
//                 <p>Hey</p>
//             </div>
//         );
//     }
// }
