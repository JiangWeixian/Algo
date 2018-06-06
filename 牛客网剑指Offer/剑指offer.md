# 剑指Offer

<!-- TOC -->

- [剑指Offer](#剑指offer)
  - [[数串](https://github.com/JiangWeixian/Algo/blob/master/牛客网剑指Offer/es6/combineToMaxium.js)](#数串httpsgithubcomjiangweixianalgoblobmasterofferes6combinetomaxiumjs)

<!-- /TOC -->

## [数串](https://github.com/JiangWeixian/Algo/blob/master/%E7%89%9B%E5%AE%A2%E7%BD%91%E5%89%91%E6%8C%87Offer/es6/combineToMaxium.js)

设有n个正整数，将他们连接成一排，组成一个最大的多位整数。
如:n=3时，3个整数13,312,343,连成的最大整数为34331213。
如:n=4时,4个整数7,13,4,246连接成的最大整数为7424613。

* `Array.sort` - 关键在于`sort`的回调函数写法