import React from 'react'
import { makeStyles, Theme, createStyles, Stepper, Step, StepButton, Button, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: 'inline-block',
    },
    controls: {
      marginTop: theme.spacing(2),
    },
  })
)

interface StepperViewProps {
  steps: StepView[]
}

interface StepView {
  label: string
  render: () => JSX.Element
  completed?: boolean
}

export const StepperView = ({ steps }: StepperViewProps) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({})

  const totalSteps = steps.length
  const isFirstStep = activeStep === 0
  const isLastStep = activeStep === totalSteps - 1
  const handleNext = () => setActiveStep(activeStep + 1)
  const handleBack = () => setActiveStep(activeStep - 1)
  const toggleCompleted = () => setCompleted({ ...completed, [activeStep]: !completed[activeStep] })

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map(({ label }, index) => (
          <Step key={label}>
            <StepButton onClick={() => setActiveStep(index)} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <Paper elevation={0}>{steps[activeStep].render()}</Paper>
        <div className={classes.controls}>
          <Button disabled={isFirstStep} onClick={handleBack} className={classes.button}>
            Back
          </Button>
          <Button disabled={isLastStep} color="primary" onClick={handleNext} className={classes.button}>
            Next
          </Button>
          <Button color="primary" onClick={toggleCompleted}>
            {completed[activeStep] ? 'Set incomplete' : 'Mark as completed'}
          </Button>
        </div>
      </div>
    </div>
  )
}
