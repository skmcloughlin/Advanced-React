import React from 'react';

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
