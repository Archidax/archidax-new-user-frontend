import React from 'react'
import './styles/styles.scss';
import { useDispatch } from 'react-redux'
// Import Pages
import MainPages from './pages';
import LoadingPage from './pages/loadingpage';
import axios from 'axios';

export default function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(true);
  const [priceBTCTitle, setPriceBTCTitle] = React.useState(0)

  const GetPriceBTCUSD = () => {
    axios({
      method: 'GET',
      url: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD',
    }).then(({data}) => {
      setPriceBTCTitle(data.USD)
    }).catch((err) => {
    })
  }
  
  
  React.useEffect(() => {
    (async() => {
      try {
        let tmp = await localStorage.getItem('token')
        if(tmp) {
          dispatch({type: "SET_ISLOGIN", data: true})
        } else {
          dispatch({type: "SET_ISLOGIN", data: false})
        }
        setLoading(false)
      }catch(err){
        setLoading(false)
      }
    })()
    GetPriceBTCUSD()
  }, [])

//   document.title = `${priceBTCTitle.toLocaleString("id-ID")} BTC/USD - Archidax`
    document.title = `Archidax`
  
  return (
      <>
          { loading ? <LoadingPage /> : <MainPages /> }
      </>
  )
}
