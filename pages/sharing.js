import Navigation from "../components/Navigation";

function sharing (){

    return(
        <div>
            <Navigation></Navigation>
            <form action="/api/blogs" method="post">
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" name="first" className="form-control" required />
                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" name="last" className="form-control"  required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control"  required />
                <label htmlFor="blog">blog</label>
                <textarea type="text" rows="8"  id="blog" name="blog" className="form-control" required />
                <button type="submit" className="btn btn-primary">Gönder</button>
            </form>
        </div>
    );
}
export default sharing;







