import { User } from '../types'

export interface Session {
    doc_id?: string
    friendly_name: string
    created: Date
    created_by: User
    members: Array<string>
}
