import '../../assets/css/loading.css'
import LoadingIcon from '../icons/LoadingIcon'

const Loader = () => {
  return (
    <>
      <p>Loading...</p>
      <div className='loading'>
        <LoadingIcon />
      </div>
    </>
  )
}

export default Loader
