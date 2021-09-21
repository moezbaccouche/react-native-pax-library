# react-native-pax-library

A React-Native module which allows the use of native features (Ticket Printing, Opening Cash Drawer, ...) of a Pax Technology Android device through NeptuneLite API.

## STILL UNDER DEVELOPMENT

## ANDROID ONLY

## Installation

Follow carefully the steps below to use this library in your React-Native App

## Step 1

Install the package from [npm](https://www.npmjs.com/package/react-native-pax-library)

```sh
npm install react-native-pax-library
```

## Step 2

Download the file [libDeviceConfig.so](./armeabi-files/libDeviceConfig.so)

## Step 3

In your React-Native app, create a folder named **jniLibs** and place it inside _`android/app/src/main`_

## Step 4

Create a folder named **armeabi-v7a** inside _`android/app/src/main/jniLibs`_ and place the file [libDeviceConfig.so](./armeabi-files/libDeviceConfig.so) there

## Step 5

Open _`android/app/build.gradle`_ and add the armeabi-v7a **filter** for the **ndk** in **defaultConfig**

```
...
android {
    ...
    defaultConfig {
        ...
        ndk {
            abiFilters "armeabi-v7a"
        }
    }
}
```

## Step 6

Run your application

```sh
npx react-native run-android
```

## Usage

## Printing

You can print a simple text using the method `printStr(text:string, cutMode?:number):void`

**cutMode** is an optional parameter to tell the printer how it should cut the paper (partially, fully or no cutting at all) after finishing printing.

If the parameter **cutMode** is not set then the printer will cut the paper **fully**.

**Full Cut** : Pax.FULL_CUT  
**Partial Cut** : Pax.PARTIAL_CUT  
**No Cutting** : Pax.NO_CUT

**default**: Pax.FULL_CUT

```js
import Pax from "react-native-pax-library";

// ...

Pax.printStr("Hello World", Pax.PARTIAL_CUT);
```

## Opening Cash Drawer

If you have a cash drawer linked to your Pax device, you will be able to open it automatically using the method `openDrawer(): Promise<any>`

The result returned from this method is a promise that resolves with the result **0** if it succeeds.

```js
// ...

try {
  const result = await Pax.openDrawer();
} catch (error) {
  console.error("Unable to open Cash Drawer.");
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
