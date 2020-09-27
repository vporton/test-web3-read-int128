// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity ^0.7.0;

import './Relay.sol';

contract FilesRelayer is Relay {
    constructor(address initAddr) Relay(initAddr) { }
}