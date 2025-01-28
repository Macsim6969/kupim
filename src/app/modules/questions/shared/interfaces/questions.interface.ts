export interface Questions {
  title: string
  descr: string
  isOpenAll: boolean
  isSlider: boolean
  listAsq: listQuestions[]
  listBottom1: ListBottom
  listBottom2: ListBottom
}

export interface listQuestions {
  title: string
  content: string
}

export interface ListBottom{
  title: string
  text: string
}
