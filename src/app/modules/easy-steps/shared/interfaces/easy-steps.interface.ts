export interface EasySteps {
  title: string
  text: string
  style: string
  contentStep1: Steps
  contentStep2: Steps
  contentStep3: Steps,
  location: LocationLinear
}

export interface Steps {
  step: string
  stepText: string
  contact: string
}

export interface LocationLinear{
  title: string;
  location_city: string;
  description: string;
  alt: string;
}
