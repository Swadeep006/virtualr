// import { resourcesLinks, platformLinks, communityLinks } from "../constants";

// function Footer() {
//   return (
//     <footer className="mt-20 border-t py-10 border-neutral-700 flex flex-col justify-around flex-grow-1 lg:flex flex-row">
//       <div>
//         <div className="text-xl font-semibold mb-2">Resources</div>
//         <div className="flex flex-col gap-2">
//           {resourcesLinks.map((resourceLink, index) => (
//             <a key={index} href="#" className="text-sm">
//               {resourceLink.text}
//             </a>
//           ))}
//         </div>
//       </div>
//       <div>
//         <div className="text-xl font-semibold mb-2">Platform</div>
//         <div className="flex flex-col gap-2">
//           {platformLinks.map((platformLink, index) => (
//             <a key={index} href="#" className="text-sm">
//               {platformLink.text}
//             </a>
//           ))}
//         </div>
//       </div>
//       <div>
//         <div className="text-xl font-semibold mb-2">Community</div>
//         <div className="flex flex-col gap-2">
//           {communityLinks.map((communityLink, index) => (
//             <a key={index} href="#" className="text-sm">
//               {communityLink.text}
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
