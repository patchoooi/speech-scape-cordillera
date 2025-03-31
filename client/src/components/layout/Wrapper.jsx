import Navbar from "./Navbar";
import Footer from "./Footer";

function Wrapper({ children }) {
   return (
     <>
       <Navbar />
       <main>{children}</main>
       <Footer />
     </>
   );
}

export default Wrapper;
