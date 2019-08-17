//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
// 1. Import modules
const Scene = require('Scene');
const Reactive = require('Reactive');
// 2. Obtain scene objects
const plant = Scene.root.find('plant');
const tracker = Scene.root.find('planeTracker0');
// 3. Assign 3D object's visibility to tracker confidence
plant.hidden = Reactive.ne(tracker.confidence, Reactive.val('HIGH'));
// How to access scene objects (uncomment line below to activate)
// const directionalLight = Scene.root.find('directionalLight0');

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

// How to log messages to the console (uncomment line below to activate)
// Diagnostics.log('Console message logged from the script.');
// code on tutorial site--------------------------------------------------------------