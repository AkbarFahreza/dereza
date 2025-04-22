'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Analytics() {
  const [onlineCount, setOnlineCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const logVisitor = async () => {
      await supabase.from('visitors').insert({
        ip: window.location.hostname,
        user_agent: navigator.userAgent,
      })
    }

    const fetchCounts = async () => {
      // Total visitors
      const { count: total } = await supabase
        .from('visitors')
        .select('*', { count: 'exact', head: true })
      setTotalCount(total || 0)

      // Online visitors (dalam 5 menit terakhir)
      const since = new Date(Date.now() - 5 * 60 * 1000).toISOString()
      const { count: online } = await supabase
        .from('visitors')
        .select('*', {
          count: 'exact',
          head: true,
        })
        .gte('inserted_at', since)
      setOnlineCount(online || 0)
    }

    logVisitor()
    fetchCounts()

    const interval = setInterval(fetchCounts, 10000) // setiap 10 detik
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='text-xs text-white font-medium mt-2'>
      Online now: <span className='font-bold mr-2'>{onlineCount}</span> Total visitors: <span className='font-bold'>{totalCount}</span>
    </div>
  )
}
