import SectionHeader from '../../../Components/SectionHeader'
import popular1 from '../../../assets/popular/c1.jpeg'
import popular2 from '../../../assets/popular/c2.jpeg'
import popular3 from '../../../assets/popular/c3.jpeg'
import popular4 from '../../../assets/popular/c4.jpeg'
import popular5 from '../../../assets/popular/c5.jpeg'
import popular6 from '../../../assets/popular/c6.jpeg'


const PopularClasses = () => {
    return (
        <div>
          <SectionHeader></SectionHeader>
            <div className='grid grid-cols-3 gap-10 p-10'>

                <div className="card w-96 glass">
                    <figure><img src={popular1} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={popular2} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={popular3} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={popular4} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={popular5} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src={popular6} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularClasses;