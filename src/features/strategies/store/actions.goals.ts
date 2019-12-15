import { Goal } from './types'
import { Endpoints, get } from 'app/service'
import { createRequest } from 'features/requests/store'

export const GOALS_REQUEST_ID = 'goals'
export const GOALS_ADD = 'goals/add'

interface GoalsAdd {
  type: typeof GOALS_ADD
  goals: Goal[]
}

export type GoalActions = GoalsAdd

export const loadGoals = () =>
  createRequest({
    id: GOALS_REQUEST_ID,
    request: () => get(Endpoints.goals),
    onSuccess: addGoals,
  })

const addGoals = (goals: Goal[]): GoalsSuccess => ({
  type: GOALS_ADD,
  // situations,
  goals: mockGoalData(goals),
})

//TODO: should be removed once api delivers real relation data
const mockGoalData = goals =>
  goals.map(goal => ({
    ...goal,
    title: goal.title.replace('BuildingBlock', 'Goal'),
    description: goal.description.replace('BuildingBlock', 'Goal'),
    measures: [1, 2, 3, 4],
  }))
