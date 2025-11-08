import { useState, useEffect } from 'react'
import LanguageToggle from './components/LanguageToggle'
import HerbCard from './components/HerbCard'
import { useTranslation } from 'react-i18next'
import { supabase } from './lib/supabaseClient'

export default function App() {
  const { t } = useTranslation()
  const [herbs, setHerbs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHerbs = async () => {
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('herbs')
          .select('*')
        
        if (error) throw error
        setHerbs(data)
      } catch (error) {
        console.error('Error fetching herbs:', error)
        // Fallback to mock data if Supabase fails
        setHerbs([
          {
            id: 1,
            name_en: 'Ginseng',
            name_zh: '人参',
            pinyin: 'Renshen',
            properties: 'Warm, Sweet',
            meridians: ['Spleen', 'Lung', 'Heart'],
            functions: 'Tonifies Qi, strengthens Spleen, calms the spirit',
            contraindications: 'Avoid in cases of heat excess'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchHerbs()
  }, [])

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f8f4f0' 
      }}>
        <LanguageToggle />
        <div>Loading your medicine...</div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f4f0' }}>
      <LanguageToggle />
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#3a2c20', textAlign: 'center' }}>
          {t('appTitle')}
        </h1>
        <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
          {herbs.map(herb => (
            <HerbCard key={herb.id} herb={herb} />
          ))}
        </div>
      </div>
    </div>
  )
}