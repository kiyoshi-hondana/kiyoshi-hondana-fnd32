"use strict"
// 1行目に記載している "use strict" は削除しないでください

const registerIds = [
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=105&no=123",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=111&no=291",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=110&no=263",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=104&no=95",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=106&no=151",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=103&no=67",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=108&no=207",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=8",
  "https://facility-jtp-adsys.zq.toyota.co.jp/api/v1/facilities/registers?contlloer=101&no=9"
];

async function registerValues() {
  for (let i = 0; i < registerIds.length; i++) {
    const response = await fetch(registerIds[i]);
    if (response.status === 204) {
      console.error("登録されていない接点があります");
      continue;
    }
    const data = await response.json();
    const value = data[0].value;
    const id = `id${i + 1}`;
    const element = document.getElementById(id);
    if (element) {
      if (value === 1) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }
}

registerValues();
setInterval(registerValues, 5000);
