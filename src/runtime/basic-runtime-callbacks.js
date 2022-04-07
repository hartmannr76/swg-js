import {Callbacks} from './callbacks';

export class BasicRuntimeCallbacks extends Callbacks {
  constructor() {
    super();
  }

  /**
   * Set the default entitlements response handler to consume a valid metering entitlement
   * while still allowing the user to have their own handler.
   * @override
   * */
  triggerEntitlementsResponse(promise) {
    promise.then((entitlementResults) => {
      const entitlements = entitlementResults.clone();
      if (entitlements.enablesThisWithGoogleMetering()) {
        entitlements.consume();
      }
    });
    return super.triggerEntitlementsResponse(promise);
  }
}
