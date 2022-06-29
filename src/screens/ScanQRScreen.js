import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {decode} from 'vision-camera-dynamsoft-barcode-reader';
import * as REA from 'react-native-reanimated';
import {Svg, Rect} from 'react-native-svg';
import {useIsFocused} from '@react-navigation/native';

const ScanQRScreen = props => {
  const {navigation} = props;
  const [hasPermission, setHasPermission] = useState(false);
  const [barcodeResults, setBarcodeResults] = useState([]);
  const [barcodeText, setBarcodeText] = useState('');
  const isFocus = useIsFocused();
  const devices = useCameraDevices();
  const device = devices.back;
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const config = {};
    config.template =
      '{"ImageParameter":{"BarcodeFormatIds":["BF_QR_CODE"],"Description":"","Name":"Settings"},"Version":"3.0"}'; //scan qrcode only
    let settings;
    if (config.template) {
      settings = JSON.parse(config.template);
    } else {
      const template = `{
        "ImageParameter": {
          "Name": "Settings"
        },
        "Version": "3.0"
      }`;
      settings = JSON.parse(template);
    }
    settings['ImageParameter']['RegionDefinitionNameArray'] = ['Settings'];
    settings['RegionDefinition'] = {
      Left: 10,
      Right: 90,
      Top: 20,
      Bottom: 60,
      MeasuredByPercentage: 1,
      Name: 'Settings',
    };
    config.template = JSON.stringify(settings);
    const results = decode(frame, config);
    REA.runOnJS(setBarcodeResults)(results);
  }, []);
  const getFrameSize = () => {
    const frameWidth = Dimensions.get('window').width;
    const frameHeight = Dimensions.get('window').height;
    return [frameWidth, frameHeight];
  };
  const getViewBox = () => {
    const frameSize = getFrameSize();
    const viewBox = '0 0 ' + frameSize[0] + ' ' + frameSize[1];
    return viewBox;
  };
  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
    navigation.addListener('focus', () => {
      setBarcodeResults([]);
      setBarcodeText('');
    });
  }, []);

  useEffect(() => {
    if (barcodeResults.length !== 0) {
      const newBarcodeText = barcodeResults[0].barcodeText;
      if (newBarcodeText !== barcodeText) {
        setBarcodeText(newBarcodeText);
      }
    }
  }, [barcodeResults]);
  useEffect(() => {
    console.log(barcodeText);
    if (barcodeText !== '') {
      navigation.navigate('Detail', {barcodeText});
    }
  }, [barcodeText]);
  return (
    <SafeAreaView style={styles.container}>
      {device != null && hasPermission && isFocus && (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          <Svg viewBox={getViewBox()}>
            <Rect
              x={0.1 * getFrameSize()[0]}
              y={0.2 * getFrameSize()[1]}
              width={0.8 * getFrameSize()[0]}
              height={0.4 * getFrameSize()[1]}
              strokeWidth="2"
              stroke="red"
            />
          </Svg>
        </>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barcodeText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default ScanQRScreen;
