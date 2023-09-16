import axios from "axios";
import { createContext, useContext, useEffect, useReducer} from "react"


<<<<<<< HEAD
=======

>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee
const GlobalContext = createContext()

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
    dentistas: [],
    dentista: {},
    favs: initialFavState,
    theme: true,
}

const reducer = (state, action) => {
  switch (action.type) {
      case 'GET_DENTISTAS':
          return {...state, dentistas: action.payload}
      case 'GET_DENTISTA':
          return {...state, dentista: action.payload}
      case 'ADD_FAV':
          return {...state, favs: [...state.favs, action.payload]}
      case 'SWITCH_THEME':
          return {...state, theme: !state.theme}
      default:
          throw new Error()
  }
}

<<<<<<< HEAD

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)  

  const url='https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios (url)
    .then(res => {dispatch({type: 'GET_DENTISTAS', payload: res.data})})
    .catch(err => console.log(err))
=======
const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState)

const url='https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios (url)
    .then(res => {
    dispatch({type: 'GET_DENTISTAS', payload: res.data})})
  .catch(err => console.log(err))
>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])

  return (
    <GlobalContext.Provider value={{dispatch, state}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

export const useGlobal = () => useContext(GlobalContext)