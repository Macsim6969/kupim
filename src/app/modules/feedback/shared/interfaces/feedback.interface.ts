export interface TestimonialsInterface{
  title: string
  feedback: Feedback[]
  content: string
}

export interface Feedback{
  content: string
  name: string
  prod: string
  feedbackMap: string
}