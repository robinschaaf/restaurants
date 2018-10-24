# Restaurant List - List of Chicago restaurants with filtering and infinite scroll
This application can be viewed on your iPhone, through an iOS emulator, or in your web browser.

## To run on an iOS device (xcode must be installed first)
1.  Install NPM Modules by executing `npm install`
2.  Install cordova globally if not already installed `npm install -g cordova`
3.  Install ios deploy if not already installed `npm install -g ios-deploy`
4.  Build the Angular app for cordova: `npm run build-cordova`
5.  Run on your plugged in iOS device `cordova run ios --buildFlag='-UseModernBuildSystem=0'`
    - or - to run in default emulator, use `cordova emulate ios --buildFlag='-UseModernBuildSystem=0'`

## Running locally in web browser
1.  Install NPM Modules by executing `npm install`
2.  Start server by executing `npm run start`
3.  Navigate your browser to: localhost:4200