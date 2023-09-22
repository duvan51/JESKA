import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

const CaptureImage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  // Solicitar permisos para acceder a la cámara
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo.uri);
      setIsPreviewVisible(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {hasPermission === null ? (
        <Text>Esperando permisos de cámara...</Text>
      ) : hasPermission === false ? (
        <Text>No tienes permiso para acceder a la cámara.</Text>
      ) : (
        <View style={{ flex: 1 }}>
          {!isPreviewVisible ? (
            <Camera
              style={{ flex: 1 }}
              type={Camera.Constants.Type.back}
              ref={(ref) => setCameraRef(ref)}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={takePicture}
                >
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    Capturar
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          ) : (
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: capturedImage }}
                style={{ flex: 1 }}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignItems: 'center',
                  backgroundColor: 'blue',
                  padding: 10,
                }}
                onPress={() => setIsPreviewVisible(false)}
              >
                <Text style={{ color: 'white' }}>Volver a la cámara</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};


export default CaptureImage
