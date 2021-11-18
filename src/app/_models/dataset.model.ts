export interface datasetModel {
    // system
    "status": string,
    // json
    "name": string,
    "description": string,
    "creator": {
        "employees": {
            "name": string
        }
    },
    "dateCreated": Date
}