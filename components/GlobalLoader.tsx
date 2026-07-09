// // "use client";

// // import { useEffect, useState } from "react";
// // import { usePathname } from "next/navigation";

// // export default function GlobalLoader() {
// //   const pathname = usePathname();
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     setLoading(true);

// //     const timeout = setTimeout(() => {
// //       setLoading(false);
// //     }, 1200);

// //     return () => clearTimeout(timeout);
// //   }, [pathname]);

// //   if (!loading) return null;

// //   return (
// //     <div className="global-loader">
// //       <img
// //         src="/logo.png"
// //         alt="Loading"
// //         className="global-loader-logo"
// //       />
// //     </div>
// //   );
// // }

// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// export default function GlobalLoader() {
//   const pathname = usePathname();

//   const firstLoad = useRef(true);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // Skip first page load
//     if (firstLoad.current) {
//       firstLoad.current = false;
//       return;
//     }

//     setVisible(true);

//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   if (!visible) return null;

//   return (
//     <div className="global-loader">
//       <img
//         src="/images/logo.png"
//         alt="Loading"
//         className="global-loader-logo"
//       />
//     </div>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function GlobalLoader() {
  const pathname = usePathname();

  const firstLoad = useRef(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="global-loader">
      <div className="global-loader-wrapper">
        <div className="loader-ring"></div>

        <img
          src="/images/logo.png"
          alt="Loading"
          className="global-loader-logo"
        />
      </div>
    </div>
  );
}