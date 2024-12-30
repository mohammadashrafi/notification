document.addEventListener("DOMContentLoaded", async function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(`/sw.js`).then((register) => {
      console.log({ register });
    });
    // register({
    //   onUpdate: async (registration) => {
    //     await registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    //     window.location.reload();
    //   }
    // });

    // if(register){
    //   register.addEventListener('updatefound',()=>{
    //     console.log('Service Worker update detected!')
    //     // window.location.reload();
    //   })
    // }

    // navigator.serviceWorker.addEventListener('controllerchange', () => {
    //   console.log('changed')
    //    window.location.reload();
    // });

    // navigator.serviceWorker.addEventListener('controllerchange', () => {
    //   console.log('changed')
    //    window.location.reload();
    // });
  }

  // const getNotifcationPremission = async () => {
  //   if (navigator.permissions) {
  //     let result = await navigator.permissions.query({ name: "notifications" });
  //     return result.state;
  //   }
  // };

  // let currentPermision = await getNotifcationPremission();

  // if ("serviceWorker" in navigator && "PushManager" in window) {
  //   if (currentPermision !== "granted") {
  //     let result = await Notification.requestPermission();

  //     if (result === "granted") {
  //       console.log("hi");
  //       navigator.serviceWorker.ready.then((registration) => {
  //         const getPushSubscription = async () => {
  //           let subScriptionOption = {
  //             userVisibleOnly: true,
  //             applicationServerKey:
  //               "BPcGUE1Li_xKlIGOendsFpq6mHJMjCZRwYORFB0vMY_YmEGq02BNlE0orJiuTy5eBzIcBqKxgwDWP_TJ7C--7zI",
  //           };

  //           let pushSubscription = await registration.pushManager.subscribe(
  //             subScriptionOption
  //           );
  //         };

  // registration.showNotification("با تشکر", {
  //   body: "hey bro",
  //   icon: "/logo512.png",
  //   dir: "rtl",
  //   badge: "/favicon.ico",
  //   image: "/logo192.png",
  //   vibrate: [200, 100, 200],
  //   tag: "react",
  //   renotify: true,
  //   requireInteraction: true,
  //   actions: [
  //     {
  //       title: "دانلود کتاب",
  //       action: "download-action",
  //       icon: "/logo192.png",
  //     },
  //     {
  //       title: "نمایش کتاب",
  //       action: "show-action",
  //       icon: "/logo192.png",
  //     },
  //   ],
  //   data: [
  //     {
  //       url: "https://www.google.com",
  //       message: "this is notif for google",
  //     },
  //     {
  //       url: "https://www.abzarwp.com",
  //       message: "this is notif for abzar",
  //     },
  //   ],
  // });
  //       });
  //     } else {
  //       console.log("else");
  //     }
  //   }
  // }
});
