import { listQuestions } from "../../../questions/shared/interfaces/questions.interface"

export interface NeedDocsInterface {
  title: string
  docs: NeedDocsArrayInterface[]
  ['need-docs-asq']: string
  listAsq: listQuestions[]
}

export interface NeedDocsArrayInterface {
  title: string
  img: string
}