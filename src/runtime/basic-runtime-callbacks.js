import {Callbacks} from './callbacks';

export class BasicRuntimeCallbacks extends Callbacks {
  constructor() {
    super();
  }

  /** @override */
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
