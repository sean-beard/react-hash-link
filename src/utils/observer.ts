export const disconnectMutationObserver = (observer?: MutationObserver) => {
  if (observer) {
    observer.disconnect();
  }
};

export const resetLoadingObserver = (
  loadingObserver?: MutationObserver,
  observerTimeout?: number
) => {
  disconnectMutationObserver(loadingObserver);
  window.clearTimeout(observerTimeout);
};
