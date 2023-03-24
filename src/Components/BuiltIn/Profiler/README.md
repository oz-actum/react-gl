# Profiler

- Lets you measure rendering performance of a React tree programmatically.
- Props:
  - id
  - onRender
    - _id_: Identifier.
    - _phase_: "mount", "update" or "nested-update".
    - _actualDuration_: Time spent by rendering the <Profiler> and its descendants for the current update.
    - _baseDuration_: Estimated time how much it would take to re-render the entire <Profiler> subtree without any optimizations.
    - _startTime_: Time of rendering the current update.
    - _endTime_: Time committed to the current update.
- Disabled in the production build by default.
