import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import { Userdata } from '../../data'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart title="User Analytics" data={Userdata} dataKey="Active Users" grid/>
        </div>
    )
}

export default Home
