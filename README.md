## 📚 Introduction

React Hook to detect faces from [react-webcam](https://www.npmjs.com/package/react-webcam) video source using [MediaPipe](https://developers.google.com/mediapipe/)

## 🧰 Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```sh
npm install react-face-detection-hook
# or
yarn add react-face-detection-hook
```

## 💡 Usage

```sh
import { 
  useFaceDetection,
  FaceDetectionResults,
  Camera,
  FaceDetection,
  Webcam
} from 'react-face-detection-hook'

function MyComponent() {
  const camWidth = ...
  const camHeight = ...
  const { webcamRef } = useFaceDetection( {
    handleOnFaceDetected,
    faceDetectionOptions: {
      model: 'short'
    },
    faceDetection: new FaceDetection( {
      locateFile: ( file ) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${ file }`
      }
    } ),
    camera: ( {
      mediaSrc,
      onFrame
    } ) => new Camera( mediaSrc, {
      onFrame,
      width: camWidth,
      height: camHeight
    } )
  } ) 

  function handleOnFaceDetected({ 
    detections
  }: FaceDetectionResults){
    console.log('face detections', detections)
  }

  return (
    <Webcam
      ref={ webcamRef }
      style={ {
        width: camWidth,
        height: camHeight
      } }
    />
  )
}
```

## 👷 Built With

- [ReactJS](https://reactjs.org/) - Frontend Javascript web framework
- [TypeScript](https://www.typescriptlang.org/) - Open-source language which builds on JavaScript
- [MediaPipe](https://developers.google.com/mediapipe/) - Machine Learning framework
- [React Webcam](https://www.npmjs.com/package/react-webcam) - Webcam Library

## 📚 Author

- **Luiz Carlos Ferreira** - [luicfrr](https://github.com/luicfrr)
