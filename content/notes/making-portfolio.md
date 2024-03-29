---
title: '做自己的 Portfolio (這個網站)'
date: '2023 / 12 / 12'
---

最近在瀏覽一些我覺得設計還不錯的網站的時候，我注意到這些網站的 HTML 結構中都有 Nuxt 的身影，進一步的搜尋後才知道原來這是一個基於 Vue.js 的前端框架。雖然我對前端框架並不是很熟悉，不過因為這次契機決定嘗試學習 Nuxt 和 Vue 並設計我的新網站。

## Nuxt 和 Vue
---
簡單的看了一些文件後，才了解到 Vue 有很多特性能讓我更有效率的開發網站：

• 可以透過 JavaScript 中的資料產生頁面內容  
• 資料改變時，頁面上的內容也會自動即時更新  
• 可以設定在內容更新時的 CSS 轉場效果  
• 把網頁中複雜的內容定義成組件，然後直接以 HTML 標籤的方式簡潔的重複使用  

而使用 Nuxt 可以透過在專案的 pages 資料夾寫 Vue 檔案來快速建立網站的頁面，這些頁面的網址也會根據你的檔案路徑去產生。另外他也能讀取 markdown 等文件產生頁面內容，因此我可以把像是作品的資料存在這些檔案中，再設計單獨的頁面來呈現這些資料，不管是頁面的內容、頁面的設計本身都變得相當易於修改與維護。

要設定一個 Nuxt 的開發環境也很簡單，只要照著官方提供的文檔輸入終端機指令便能完成初始化專案，接著就能開始寫 Vue 檔案了！

## 首頁動畫
---
由於最近我接觸了一個很酷的互動動畫製作工具 Rive，可以製作插圖動畫，還能設定骨架和加入互動式的設計，因此決定試試看繪製一個可以互動的角色放在網站的首頁上。

![](/img/notes/003.png)

一開始把動畫放到網站上有點卡卡的，後來測試以後發現是因為我的素材圖片尺寸太大，降低圖片大小以後就很順暢了。

雖然幫自己畫的圖拆圖層和設定骨架權重還蠻累的，不過過程中我也覺得自己學會了一些新的動畫技術，而且最後看到自己的圖動起來感覺超讚的～

## 滑鼠效果
---
在這個網站中，我使用了以前設計的滑鼠特效，增加網站的趣味性。由於用 Nuxt 開發出來的網頁是單頁應用程式，在切換頁面內容的時候實際上是在同一個 HTML 檔案中，所以不用擔心這種互動式的效果被中斷。

這個滑鼠特效是使用 Canvas 製作的，只要滑鼠移動就會持續在滑鼠的位置生成隨機大小的粒子，並且會在移動時偵測滑鼠碰到的物件是否可以點擊，用動畫轉變成一個方匡來提示使用者。

## 成果連結
---
啊，你現在就在看這個網站，所以好像不需要