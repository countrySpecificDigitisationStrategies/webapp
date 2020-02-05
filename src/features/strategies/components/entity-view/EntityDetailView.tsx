import React from 'react'
import { StandardView, StandardViewProps } from 'shared/components'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { EntityType } from 'features/strategies/components/types'
import { ThreadList } from 'features/discussions/components'
import { DiscussionDetailView } from 'features/discussions/components/discussionDetail'
import { Strategy, StrategyEntity } from 'features/strategies/store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    additionalInfo: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    nextLevel: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    nextLevelTitle: {
      marginBottom: theme.spacing(2),
    },
    threads: {
      marginTop: theme.spacing(5),
    },
    threadsTitle: {
      marginBottom: theme.spacing(2),
    },
  })
)

const mapToDiscussionEntityType = (entityType: EntityType): DiscussionDetailView => {
  switch (entityType) {
    case EntityType.Strategy:
      return DiscussionDetailView.Strategy
    case EntityType.Block:
      return DiscussionDetailView.BuildingBlock
    case EntityType.Category:
      return DiscussionDetailView.SituationCategory
    case EntityType.Situation:
      return DiscussionDetailView.Situation
    case EntityType.Measure:
      return DiscussionDetailView.StrategyMeasure
  }
}

interface EntityDetailViewProps<T extends StrategyEntity> extends StandardViewProps {
  entityType: EntityType
  entityId: T['id']
  strategyId?: Strategy['id']
  renderInfo?: () => JSX.Element
  nextLevel?: {
    title?: string
    render: () => JSX.Element
  }
}

export const EntityDetailView = <T extends StrategyEntity>({
  entityType,
  entityId,
  strategyId,
  renderInfo,
  nextLevel,
  ...props
}: EntityDetailViewProps<T>) => {
  const classes = useStyles()

  return (
    <StandardView
      {...props}
      renderContent={() => (
        <>
          {renderInfo && <div className={classes.additionalInfo}>{renderInfo()}</div>}
          {nextLevel && (
            <div className={classes.nextLevel}>
              {nextLevel.title && (
                <Typography variant="h5" className={classes.nextLevelTitle}>
                  {nextLevel.title}
                </Typography>
              )}
              {nextLevel.render()}
            </div>
          )}
          {(strategyId || entityType === EntityType.Strategy) && (
            <div className={classes.threads}>
              <>
                <Typography variant="h5" className={classes.threadsTitle}>
                  Discussion
                </Typography>
                <ThreadList
                  displayedView={mapToDiscussionEntityType(entityType)}
                  strategyId={strategyId || entityId}
                  contentId={entityId}
                />
              </>
            </div>
          )}
        </>
      )}
    />
  )
}
