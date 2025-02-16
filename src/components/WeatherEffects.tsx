import type { WeatherEffect } from "./WeatherMusicPlayer"

interface WeatherEffectsProps {
  effects: Record<WeatherEffect, boolean>
  intensity: Record<WeatherEffect, number>
}

export default function WeatherEffects({ effects, intensity }: WeatherEffectsProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {effects.rain && <RainEffect intensity={intensity.rain} />}
      {effects.fog && <FogEffect intensity={intensity.fog} />}
      {effects.clouds && <CloudEffect intensity={intensity.clouds} />}
      {effects.sun && <SunEffect intensity={intensity.sun} />}
      {effects.moon && <MoonEffect intensity={intensity.moon} />}
    </div>
  )
}

function RainEffect({ intensity }: { intensity: number }) {
  const drops = Array.from({ length: Math.floor(intensity / 2) }, (_, i) => (
    <div
      key={i}
      className="absolute bg-blue-200 w-0.5 h-4 opacity-50 animate-rain"
      style={{
        left: `${Math.random() * 100}%`,
        top: `-${Math.random() * 100}%`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ))

  return <div className="absolute inset-0 overflow-hidden">{drops}</div>
}

function FogEffect({ intensity }: { intensity: number }) {
  return <div className="absolute inset-0 bg-white animate-fog" style={{ opacity: intensity / 200 }} />
}

function CloudEffect({ intensity }: { intensity: number }) {
  const clouds = Array.from({ length: Math.floor(intensity / 20) }, (_, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full opacity-70 animate-cloud"
      style={{
        width: `${50 + Math.random() * 100}px`,
        height: `${30 + Math.random() * 60}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        animationDuration: `${20 + Math.random() * 40}s`,
        animationDelay: `${Math.random() * -20}s`,
      }}
    />
  ))

  return <div className="absolute inset-0 overflow-hidden">{clouds}</div>
}

function SunEffect({ intensity }: { intensity: number }) {
  return (
    <div
      className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full animate-pulse"
      style={{ opacity: intensity / 100 }}
    />
  )
}

function MoonEffect({ intensity }: { intensity: number }) {
  return (
    <div
      className="absolute top-10 left-10 w-16 h-16 bg-gray-200 rounded-full animate-pulse"
      style={{ opacity: intensity / 100 }}
    />
  )
}

