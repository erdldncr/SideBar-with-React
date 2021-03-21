import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return ( 

         <>
            <div className='sidebar'>
                <img src="" alt=""/>
                    <a href="/"><span className='icon'><FaSignInAlt/></span> Login</a>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Service</a>
                    <a href="/">Contact</a>
                    <a href="/"><span className='icon'><FaSignOutAlt/></span>Sign Out</a>
            </div>       
    
        </>    
     );
}
 
export default Sidebar;

