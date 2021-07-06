// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// export default function Layout(props) {
//   return (
//     <div>
//       <Header />
//       {props.children}
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
//Object destructing   ---- >   props    and    {Props.children}
export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: "lightBlue" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
