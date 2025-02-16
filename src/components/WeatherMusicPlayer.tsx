"use client"

import { useState } from "react"
import { useSpring, animated } from "react-spring"
import WeatherControls from "./WeatherControls"
import WeatherEffects from "./WeatherEffects"

const timeOfDayBackgrounds = {
  day: "/placeholder.svg?height=1080&width=1920",
  night: "/placeholder.svg?height=1080&width=1920",
  noon: "/placeholder.svg?height=1080&width=1920",
  evening: "/placeholder.svg?height=1080&width=1920",
}

export type TimeOfDay = "day" | "night" | "noon" | "evening"
export type Season = "spring" | "summer" | "fall" | "winter"
export type WeatherEffect = "rain" | "fog" | "clouds" | "sun" | "moon"

export default function WeatherMusicPlayer() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day")
  const [season, setSeason] = useState<Season>("spring")
  const [effects, setEffects] = useState<Record<WeatherEffect, boolean>>({
    rain: false,
    fog: false,
    clouds: false,
    sun: true,
    moon: false,
  })
  const [intensity, setIntensity] = useState<Record<WeatherEffect, number>>({
    rain: 50,
    fog: 50,
    clouds: 50,
    sun: 50,
    moon: 50,
  })

  const backgroundProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  })

  const toggleEffect = (effect: WeatherEffect) => {
    setEffects((prev) => ({ ...prev, [effect]: !prev[effect] }))
  }

  const changeIntensity = (effect: WeatherEffect, value: number) => {
    setIntensity((prev) => ({ ...prev, [effect]: value }))
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <animated.div
        style={{
          ...backgroundProps,
          backgroundImage: `url(${timeOfDayBackgrounds[timeOfDay]})`,
        }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-8">Anime Weather Music Player</h1>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 w-full max-w-2xl">
          {/* Placeholder for music controls */}
          <div className="h-20 bg-white bg-opacity-30 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white text-lg">Music Player Controls (Coming Soon)</span>
          </div>
          <WeatherControls
            timeOfDay={timeOfDay}
            setTimeOfDay={setTimeOfDay}
            season={season}
            setSeason={setSeason}
            effects={effects}
            toggleEffect={toggleEffect}
            intensity={intensity}
            changeIntensity={changeIntensity}
          />
        </div>
      </div>
      <WeatherEffects effects={effects} intensity={intensity} />
    </div>
  )
}

