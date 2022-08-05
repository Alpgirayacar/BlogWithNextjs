import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Link from 'next/link'

import useSWR from 'swr';


export default function Home() {

 /* const { data, error } = useSWR('/api/staticdata', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped
   to the structure of the json file
   */
  
  return (
   
    <div >
       <Head> <title>anasayfa</title></Head>
   <Navigation></Navigation>
   <div class="card" with={400}>
    

  </div>
 
  
  

  
    </div>
    


  )
}
