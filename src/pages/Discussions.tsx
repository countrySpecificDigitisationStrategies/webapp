import React from 'react'
import { DiscussionForumsGrid } from 'features/discussions/components'
import { StandardView } from 'shared/components'

const Discussions = () => {
  return (
    <div className="Discussions">
      <StandardView
        title="Discussion"
        description="As the individual measures are kept generic on purpose, they will be required to adapt them to the needs of
        individual countries and regions. To drive this adaption, an open discussion is required. Everyone's input is
        welcomed, whether if it comes from an official, an NGO or an interested citizen. Below you find the discussion
        forums for the individual countries."
        renderContent={() => <DiscussionForumsGrid />}
      />
    </div>
  )
}

export default Discussions
