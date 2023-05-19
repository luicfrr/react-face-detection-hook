import useFaceDetection from './hooks/useFaceDetection'
import Webcam from 'react-webcam'
import { Camera } from '@mediapipe/camera_utils'
import { FaceDetection } from '@mediapipe/face_detection'

export * from './types'
export {
  useFaceDetection,
  Camera,
  FaceDetection,
  Webcam
}