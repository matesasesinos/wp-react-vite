import { useState, useCallback } from 'react';

type RouteHook = [string, (newRoute: string) => void]

export function useRoute(): RouteHook {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash);

  const navigateTo = useCallback((newRoute: string) => {
    window.location.hash = newRoute;
    setCurrentRoute(newRoute);
  }, []);

  return [currentRoute, navigateTo];
}