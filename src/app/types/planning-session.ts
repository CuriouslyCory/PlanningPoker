import { User } from '.'

export interface PlanningSession {
    doc_id?: string
    friendly_name: string
    created: Date
    created_by: User
    members: Array<string>
}
