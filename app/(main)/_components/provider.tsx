"use client";

import { useState, useEffect } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [rendered, setRendered] = useState<number | null>(null);

  useEffect(() => {
    setRendered(Date.now());
  }, []);

  return (
    <div>
      <div>main layout rendered: {rendered}</div>
      {children}
    </div>
  );
}
