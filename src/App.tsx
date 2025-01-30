import React from 'react';
import { SparklesPreview, SparklesPreviewDark, SparklesPreviewColorful } from './components/ui/SparklesPreview';
import { SplineSceneBasic } from "./components/ui/Spline-Scene";
function App() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <SparklesPreview />
      <SparklesPreviewDark />
      <SparklesPreviewColorful />
      <SplineSceneBasic />
    </div>
  );
}

export default App;