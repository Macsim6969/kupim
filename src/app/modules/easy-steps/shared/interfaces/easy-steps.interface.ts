export interface EasySteps {
  title: string
  text: string
  contentStep1: Steps
  contentStep2: Steps
  contentStep3: Steps
}

export interface Steps {
  step: string
  stepText: string
  contact: string
}