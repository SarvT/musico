import type { TimeOfDay, Season, WeatherEffect } from "./WeatherMusicPlayer"

interface WeatherControlsProps {
  timeOfDay: TimeOfDay
  setTimeOfDay: (time: TimeOfDay) => void
  season: Season
  setSeason: (season: Season) => void
  effects: Record<WeatherEffect, boolean>
  toggleEffect: (effect: WeatherEffect) => void
  intensity: Record<WeatherEffect, number>
  changeIntensity: (effect: WeatherEffect, value: number) => void
}

export default function WeatherControls({
  timeOfDay,
  setTimeOfDay,
  season,
  setSeason,
  effects,
  toggleEffect,
  intensity,
  changeIntensity,
}: WeatherControlsProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-white font-semibold mb-2">Time of Day</h2>
        <div className="flex space-x-2">
          {(["day", "night", "noon", "evening"] as TimeOfDay[]).map((time) => (
            <button
              key={time}
              onClick={() => setTimeOfDay(time)}
              className={`px-3 py-1 rounded ${timeOfDay === time ? "bg-blue-500 text-white" : "bg-white text-black"}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-white font-semibold mb-2">Season</h2>
        <div className="flex space-x-2">
          {(["spring", "summer", "fall", "winter"] as Season[]).map((s) => (
            <button
              key={s}
              onClick={() => setSeason(s)}
              className={`px-3 py-1 rounded ${season === s ? "bg-green-500 text-white" : "bg-white text-black"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-white font-semibold mb-2">Weather Effects</h2>
        <div className="space-y-2">
          {Object.entries(effects).map(([effect, isActive]) => (
            <div key={effect} className="flex items-center space-x-2">
              <button
                onClick={() => toggleEffect(effect as WeatherEffect)}
                className={`px-3 py-1 rounded ${isActive ? "bg-purple-500 text-white" : "bg-white text-black"}`}
              >
                {effect}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={intensity[effect as WeatherEffect]}
                onChange={(e) => changeIntensity(effect as WeatherEffect, Number.parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

