import { RefObject } from 'react'
import {
  FaceDetection,
  Options,
  Results
} from '@mediapipe/face_detection'
import { Camera } from '@mediapipe/camera_utils'
import Webcam from 'react-webcam'

export type FaceDetectionResults = Results
export type FaceDetectionType = {
  faceDetectionOptions?: Options
  faceDetection: FaceDetection
  camera?: ( cameraOptions: CameraOptions ) => Camera
  handleOnFaceDetected: ( results: FaceDetectionResults ) => void
}
export type FaceDetectionReturnType = {
  webcamRef: RefObject<Webcam>
}
export type CameraOptions = {
  width: number
  height: number
  mediaSrc: HTMLVideoElement
  onFrame: () => Promise<void>
}