import { RPCNode, Web3Node } from 'libs/nodes';
import { StaticNetworkNames } from './network';
import { StaticNodesState, CustomNodesState } from 'reducers/config/nodes';
import CustomNode from 'libs/nodes/custom';

interface CustomNodeConfig {
  id: string;
  isCustom: true;
  name: string;
  lib: CustomNode;
  service: 'your custom node';
  url: string;
  port: number;
  network: string;
  auth?: {
    username: string;
    password: string;
  };
}

interface StaticNodeConfig {
  isCustom: false;
  network: StaticNetworkNames;
  lib: RPCNode | Web3Node;
  service: string;
  estimateGas?: boolean;
  hidden?: boolean;
}

interface Web3NodeConfig extends StaticNodeConfig {
  lib: Web3Node;
}

declare enum StaticNodeName {
  ETH_MEW = 'eth_mew',
  ETH_MYCRYPTO = 'eth_mycrypto',
  ETH_ETHSCAN = 'eth_ethscan',
  ETH_INFURA = 'eth_infura',
  ROP_MEW = 'rop_mew',
  ROP_INFURA = 'rop_infura',
  KOV_ETHSCAN = 'kov_ethscan',
  RIN_ETHSCAN = 'rin_ethscan',
  RIN_INFURA = 'rin_infura',
  ETC_EPOOL = 'etc_epool',
  UBQ = 'ubq',
  EXP_TECH = 'exp_tech'
}

type NonWeb3NodeConfigs = { [key in StaticNodeName]: StaticNodeConfig };

interface Web3NodeConfig {
  web3?: Web3NodeConfig;
}

type NodeConfig = StaticNodesState[StaticNodeName] | CustomNodesState[string];