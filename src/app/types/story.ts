import { types } from "util";
import { Vote } from '../types'

export interface Story {
    doc_id: string
    description: string
    votes: Vote[]
}
