import '../styles/globals.css'
import './../styles/styles.css'
import '../app/globals.css'
import { BreakpointProvider } from '../provider/breakpoint';
import React, { useState, useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  const queries = {
    xs_mobile: '(max-width: 383px)',
    mobile: '(max-width: 500px)',
    smallTablet: '(max-width: 785px)',
    tablet: '(max-width: 1000px)',
    kindaWide: '(max-width: 1320px)',
    widescreen: '(max-width: 2180px)',
    orientation: '(orientation: portrait)'
  };

  return (<>
  <BreakpointProvider queries={queries} >
   <Component {...pageProps} />
  </BreakpointProvider>
 
  </>)
}

export default MyApp
