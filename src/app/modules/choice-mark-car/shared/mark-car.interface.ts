export interface MarkCarInterface {
  title: string
  allCard: CardArray[]
}

export interface CardArray {
  title: string
  lists: CarLists[]
}

export interface CarLists {
  img: string
  title: string
  url: string
}