/*
 *@author: zhulz
 *@date: 2019-08-20 11:09:26
 *@version: V1.0.0
 */
import {Dimensions, StatusBar, Platform, PixelRatio} from 'react-native';

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();

const designWidth = 750.0;
const designHeight = 1334.0;

let screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH);

export const statusBarHeight = getStatusBarHeight();
export const safeAreaViewHeight = isIphoneX() ? 34 : 0;
//手机屏幕的宽度
export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;

/**
 * set text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size) {
  var scaleWidth = screenW / designWidth;
  var scaleHeight = screenH / designHeight;
  var scale = Math.min(scaleWidth, scaleHeight);
  size = Math.round((size * scale) / fontScale + 0.5);
  return size;
}

/**
 * set height
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeH(size) {
  var scaleHeight = (size * screenPxH) / designHeight;
  size = Math.round(scaleHeight / pixelRatio + 0.5);
  return size;
}

/**
 * set width
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeW(size) {
  var scaleWidth = (size * screenPxW) / designWidth;
  size = Math.round(scaleWidth / pixelRatio + 0.5);
  return size;
}

/**
 * 判断是否为iphoneX
 * @returns {boolean}
 */
export function isIphoneX() {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  return Platform.OS == 'ios' && (height == X_HEIGHT && width == X_WIDTH);
}

//状态栏的高度
export function getStatusBarHeight() {
  if (Platform.OS == 'android') {return StatusBar.currentHeight;}
  if (isIphoneX()) {
    return 44;
  }
  return 20;
}

export function ifIphoneX(iphoneXStyle, iosStyle, androidStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  } else if (Platform.OS === 'ios') {
    return iosStyle;
  } else {
    if (androidStyle) {return androidStyle;}
    return iosStyle;
  }
}
