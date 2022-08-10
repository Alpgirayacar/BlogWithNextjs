import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Link from 'next/link'

import useSWR from 'swr';


export default function Home(props) {
  const posts=props.posts;
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

 
  {posts.map(post=>
            <div className="card-body"> 
                 <h4 className="card-title">{post.id}</h4>
                <p className="card-text">{post.title}</p>
                <p className="card-text">{post.content}</p>
                </div>
                )}  
  

  
    </div>
    


  )
}

import fsPromises from 'fs/promises';
import path from 'path'


export async function getServerSideProps(){
    const filePath=path.join(process.cwd(),'data.json');
    const jsonData=await fsPromises.readFile(filePath);
    const objectData=JSON.parse(jsonData);
    console.log(objectData);

    return{
        props:objectData
    }
  }

