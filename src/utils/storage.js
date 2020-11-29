export function preloadedState() {
  try {
    const storedState = localStorage.getItem('storedState');
    if (!storedState) return undefined;
    else return JSON.parse(storedState);
  } catch(error) {
    console.log(`Failed to fetch state from localStorage: ${error}`);
    return undefined;
  }
}

export function storeState(state) {
  try {
    localStorage.setItem('storedState', JSON.stringify(state));
  } catch(error) {
    console.log(`Failed to store state to localStorage: ${error}`);
    return undefined;
  }
}
