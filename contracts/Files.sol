// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import './ABDKMath64x64.sol';

contract Files {

    using ABDKMath64x64 for int128;

    int128 public arToETHCoefficient;

    constructor() {
        arToETHCoefficient = int128(8).divi(int128(10)); // 80%
    }
}
