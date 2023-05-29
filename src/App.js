  import './App.css';
  import Home from './components/Home';
  import Navbar from './components/Navbar'
  import Footer from './components/Footer';
  import { Typography } from '@mui/material';
  import { Provider } from 'react-redux';
  import store from './store/store';
  import Products from './components/Product';
import ProductContextProvider from './context/Cart/CartContext';
import { colors, createTheme,ThemeProvider } from "@mui/material";
import FormContextProvider from './context/Cart/FormContext';
import Theme from './components/Theme';
const  theme=createTheme({
  palette:{
    secondary:{
          main:colors.orange[500]
      }
  }
})
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <Provider store={store}>
          <FormContextProvider>
        <ProductContextProvider>
       <Navbar/>
      <Home/>
      <br />
      <Typography sx={{fontWeight:'900',fontSize:'30px'}}>POPULAR PRODUCTS</Typography>
      <br /> <br />
      <Products/>
     <br />
      <Footer/>
      </ProductContextProvider>
      </FormContextProvider>
       </Provider>
       </ThemeProvider>
      
    </div>
  );
}

export default App;
