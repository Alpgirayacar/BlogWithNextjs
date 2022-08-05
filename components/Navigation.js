
import Link from "next/link";
function Navigation  () {

 return(   
<div>

    
        
<nav class="navbar navbar-expand-sm bg-light justify-content-center">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/" >Anasayfa</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">Hakkımda</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://github.com/Alpgirayacar" target="_blank">GitHub</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="https://www.linkedin.com/in/alpgiray-acar-7585a016b/" target="_blank">LinkedIn</a>
    </li>
    <li><Link href="/contact"><a class="nav-link">iletisim</a></Link></li>
    <li><Link href="/sharing"><a class="nav-link">Paylaşım</a></Link></li>
    <li><Link href="/sharing2"><a class="nav-link">Paylaşım2</a></Link></li>
  </ul>
</nav>
</div>

);

}

export default Navigation;