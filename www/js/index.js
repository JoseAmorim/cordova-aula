/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  document.getElementById('deviceready').classList.add('ready')
}

const button = document.getElementById('camera')

button.addEventListener('click', () => {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
  })

  function onSuccess(imageData) {
    const image = document.getElementById('foto')
    image.src = 'data:image/jpeg;base64,' + imageData
    image.style.width = '300px'
    image.style.height = '200px'
  }

  function onFail(message) {
    alert('Failed because: ' + message)
  }
})

const range = document.getElementById('vibracao')

const vibrar = document.getElementById('vibrar')

updateRangeText(range.value)

vibrar.addEventListener('click', () => {
  navigator.vibrate(range.value)
})

range.oninput = function () {
  updateRangeText(this.value)
}

function updateRangeText(value) {
  document.getElementById('valor_vibracao').innerText = `${(
    value / 1000
  ).toFixed(0)} Segundos`
}
