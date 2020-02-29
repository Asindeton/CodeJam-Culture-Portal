 import React, {useContext} from "react"

 import Header from "./Header/Header"
 import Footer from './Footer/Footer'
 import "./layout.scss"

 import GlobalContextProvider from "./context/GlobalContextProvider.js"
 import {GlobalStateContext, GlobalDispatchContext} from "./context/GlobalContextProvider.js"

 const Layout = (props) => {

   const dispatch = useContext(GlobalDispatchContext);
   const state = useContext(GlobalStateContext);

   return (
     <div>
     <div>
         <Header />
         {props.children}
     </div>
       <Footer />
     </div>
   )

 }
 export default Layout
