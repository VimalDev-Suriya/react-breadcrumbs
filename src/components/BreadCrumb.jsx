import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
    const {pathname} = useLocation();
    const pathnames = pathname.split('/').filter(x => x);
    let breadcrumbs = "";

    return <nav>
        {
            pathnames.length > 0 ? <Link to='/'>Home</Link> : null
        }
        
        {
            pathnames.map((path, idx) => {
                breadcrumbs += `/${path}`
                return <>
                    {
                        idx === pathnames.length-1 ? <span style={{marginLeft:"1rem"}}>/{path}</span> : <Link to={path} style={{marginLeft:"1rem"}}>{breadcrumbs}</Link>
                    }
                </>
            })
        }
    </nav>
}

export default BreadCrumb;