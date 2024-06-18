//import { registerApplication, start } from "single-spa";
//
//registerApplication({
//  name: "@single-spa/welcome",
//  app: () =>
//    System.import(
//      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//    ),
//  activeWhen: ["/"],
//});

// registerApplication({
//   name: "@gngmfe/navbar",
//   app: () => System.import("@gngmfe/navbar"),
//   activeWhen: ["/"]
// });
import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@gngmfe/single-spa-header-nav-ui",
  () => System.import("@gngmfe/single-spa-header-nav-ui"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@gngmfe/single-spa-mfe1-reacttssalt-ui",
  () => System.import("@gngmfe/single-spa-mfe1-reacttssalt-ui"),
  isActive.page1,
  { domElement: document.getElementById("page-1-container") }
);

registerApplication(
  "@gngmfe/single-spa-mfe1-reactjsmui-ui",
  () => System.import("@gngmfe/single-spa-mfe2-reactjsmui-ui"),
  isActive.page2,
  { domElement: document.getElementById("page-2-container") }
);

//start();
start({
  urlRerouteOnly: true,
});


