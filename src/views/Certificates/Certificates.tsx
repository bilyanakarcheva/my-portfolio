import telerikCertificate1 from '../../assets/Telerik_Certificate_1.png'
import telerikCertificate2 from '../../assets/Telerik_Certificate_2.png'

function Certificates() {
  return (
    <div id="certificates" className='border-b border-base-200 flex flex-col w-full h-auto min-h-screen p-20'>
      <h1 className="text-4xl font-bold text-accent text-center mb-10">Recent Certificates</h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <img src={telerikCertificate1} className="border-2 rounded-lg max-w-full h-auto hover:scale-105 hover:shadow-lg transition-transform transform hover:border-indigo-600" style={{ maxHeight: '400px' }} alt="Certificate 1" />
        <img src={telerikCertificate2} className="border-2 rounded-lg max-w-full h-auto hover:scale-105 hover:shadow-lg transition-transform transform hover:border-indigo-600" style={{ maxHeight: '400px' }} alt="Certificate 2" />
      </div>
      <h1 className="text-4xl font-bold text-accent text-center p-10 mb-10">Previous Certificates</h1>
      <div className="flex flex-row justify-center items-center gap-10">

      </div>
    </div>

  );
}

export default Certificates;