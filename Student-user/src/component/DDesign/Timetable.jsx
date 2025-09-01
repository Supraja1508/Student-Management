import { useState } from "react"

export const Timetable = () => {
  return (
    <div className="font-serif">
        <div className="mt-20 max-w-5xl mx-auto shadow-2xl/30 p-8">
            <h1 className="text-2xl font-bold uppercase bg-gradient-to-t from-blue-300 to-blue-800 bg-clip-text text-transparent">timetable</h1>
{/* timetable */}
            <table className="mt-10 border-1 ">
                <tr className="uppercase ">
                    <th className="p-2">mon</th>
                    <th className="p-2">tue</th>
                    <th className="p-2">wed</th>
                    <th className="p-2">thu</th>
                    <th className="p-2">fri</th>
                    <th className="p-2">sat</th>
                    <th className="p-2">sun</th>
                </tr>
            </table>
        </div>
    </div>
  )
}
