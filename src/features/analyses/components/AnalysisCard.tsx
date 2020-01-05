import React from 'react'
import { Analysis } from 'features/analyses/store'
import { OptionsCard } from 'shared/components/options/OptionsCard'

export interface AnalysisCardProps {
  analysis: Analysis
}

export const AnalysisCard = ({ analysis }: AnalysisCardProps) => (
  <OptionsCard
    title={analysis.title}
    overline={analysis.text}
    image={analysis.country.flag_rectangle}
    description={analysis.text}
    link={{
      to: `/analyses/${analysis.id}`,
      title: 'View Analysis',
    }}
  />
)
