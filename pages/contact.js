import Navigation from "../components/Navigation";

function contact(){  
 
  return(
    <div>
      <Navigation></Navigation>
      <h1>iletisim</h1>
      <div hight="300" >
        <form action="/api/users" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" className="form-control" name="first" />
          <label for="email">Enter your email:</label>
          <input  type="email" id="email" className="form-control" name="email" ></input>
          <label for="ileti">Enter your message:</label>
          <input type="text" id="ileti"  className="form-control" name="ileti" ></input>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div> 
  );
}
export default contact;
