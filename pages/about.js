import Navigation from "../components/Navigation";

export default function abaut(props){
    const posts=props.person;


    return(
        <div>
            <Navigation></Navigation>
                    
            
            {posts.map(post=>
            <div className="card-body"> 
                 <h4 className="card-title">{post.name}</h4>
                <p className="card-text">{post.description}</p>
                </div>
                )}   
               

               
        </div>
    );
            }   
import fsPromises from 'fs/promises';
import path from 'path'


export async function getServerSideProps(){
    const filePath=path.join(process.cwd(),'alpgiray.json');
    const jsonData=await fsPromises.readFile(filePath);
    const objectData=JSON.parse(jsonData);
    console.log(objectData);

    return{
        props:objectData
    }

}




