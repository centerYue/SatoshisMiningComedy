// import { ethers } from 'ethers';
import numeral from "numeral";

export const NULL_ADDR = "0x0000000000000000000000000000000000000000";
export const TIME_RATIO = 1;

export const SECOND = 1 * TIME_RATIO;
export const MINUTES = SECOND * 60;
export const HOUR = MINUTES * 60;
export const DAY = HOUR * 24;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365;

export const truncAddress = (addr) => {
  if (addr && addr.length === 42 && addr !== NULL_ADDR) {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  }
  return "-";
};

// check if a timestamp is from the past, need to be in millisecond
export const checkTime = (ts) => new Date().getTime() > ts;

export const FETCH_STATE = {
  INIT: 0,
  SUCCESS: 1,
  FAILURE: 2,
};

// reducer for general contract calls including states: loading, error, data
export const readContractReducer = (state, action) => {
  switch (action.type) {
    case FETCH_STATE.INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_STATE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case FETCH_STATE.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error("Invalid general contract action");
  }
};

// convert decimal number to Hex string
export const toHex = (decimalNum) => `0x${decimalNum.toString(16)}`;

export const formatOutput = (item) => item || "-";

export const formatNumber = (num, formatString = "0,0[.]00") => {
  if (!num || parseFloat(num) === 0) {
    return "-";
  }
  return numeral(num).format(formatString);
};

export const safeBigNumberToNumber = (bigNumber) => {
  if (bigNumber.gt(Number.MAX_SAFE_INTEGER - 1)) {
    return Number.MAX_SAFE_INTEGER;
  }
  return bigNumber.toNumber();
};

export const getOrdinal = (n) => {
  let ord = "th";

  if (n % 10 === 1 && n % 100 !== 11) {
    ord = "st";
  } else if (n % 10 === 2 && n % 100 !== 12) {
    ord = "nd";
  } else if (n % 10 === 3 && n % 100 !== 13) {
    ord = "rd";
  }

  return ord;
};
