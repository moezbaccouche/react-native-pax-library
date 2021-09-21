
package com.reactpaxlibrary;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.pax.dal.ICashDrawer;
import com.pax.dal.IDAL;
import com.pax.dal.IPrinter;
import com.pax.neptunelite.api.NeptuneLiteUser;

public class RNPaxLibraryModule extends ReactContextBaseJavaModule {

    private static final String NAME = "Pax";
    private final ReactApplicationContext reactContext;

    private IDAL dal;
    private IPrinter printer;
    private ICashDrawer cashDrawer;

    public RNPaxLibraryModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;

        try {
            dal = NeptuneLiteUser.getInstance().getDal(reactContext);
            printer = dal.getPrinter();
            cashDrawer = dal.getCashDrawer();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void printStr(String text, Double cutMode) {
        try {
            printer.init();
            printer.setGray(3);
            printer.printStr(text, null);
            printer.start();
            printer.cutPaper(cutMode.intValue());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void openDrawer(Promise promise) {
        final int result = cashDrawer.open();

        if (result == 0) {
            promise.resolve(result);
        } else {
            promise.reject("Error "+ result, "The cash drawer cannot be opened.");
        }
    }
}