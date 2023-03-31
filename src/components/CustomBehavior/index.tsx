import {useLocation, NavLink} from "react-router-dom";

export default function CustomBehavior({ to, ...props} :any){
const location = useLocation();
return(
    <NavLink to= {to + location.search} {...props}/>
)
}