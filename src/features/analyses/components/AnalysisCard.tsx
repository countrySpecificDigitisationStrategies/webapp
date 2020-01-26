import React from 'react'
import { Analysis } from 'features/analyses/store'
import { OptionsCard } from 'shared/components/options/OptionsCard'

export interface AnalysisCardProps {
  analysis: Analysis
}

export const AnalysisCard = ({ analysis }: AnalysisCardProps) => (
  <OptionsCard
    title={analysis.title}
    overline={analysis.country.name}
    image={analysis.country.flagRectangle}
    link={{
      to: `/analyses/${analysis.id}`,
      title: 'View Analysis',
    }}
  />
)
