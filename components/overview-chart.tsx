"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", registrations: 400 },
  { name: "Feb", registrations: 300 },
  { name: "Mar", registrations: 200 },
  { name: "Apr", registrations: 278 },
  { name: "May", registrations: 189 },
  { name: "Jun", registrations: 239 },
  { name: "Jul", registrations: 349 },
]

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="registrations" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

