import { useState, useCallback } from 'react';

export function useRoute(initialRoute) {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  const navigateTo = useCallback((newRoute) => {
    window.location.hash = newRoute;
    setCurrentRoute(newRoute);
  }, []);

  return [currentRoute, navigateTo];
}