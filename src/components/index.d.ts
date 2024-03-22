
export interface Course {
    id: string
    ID: number
    uuid: string
    is_shop: boolean
    image: string
    description: string
    name: string
    mark: string
    teacher: string
    grade: number
    category: Category
    chapters: Array<Chapter> | null
    last_updated_at: string
}


export interface Category {
    ID: number
    description: string
    name: string
}

export interface Chapter {
    id: string
    ID: number
    content: string
    uuid: string
    course_id: number
    download_resource: string
    github_resource: string
    order_index: number
    mark: string
    name: string
    online_running_code: string
    order_index: number
    recap_quiz: Array<Quiz> | null
}

export interface Quiz {
    ID: number
}

export interface Page {
    ID: number
    content: string
}

export interface User {
    ID: number
    name: string,
    avatar: string,
}


export const tokenExample = {
    "username": "yangwawa0323",
    "email": "yangwawa0323@163.com",
    "user_id": 1,
    "avatar_url": "https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Black&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=AngryNatural&hairColor=Auburn&mouthType=Eating&skinColor=Brown&topType=ShortHairDreads02",
    "etag": "7deda888-ce5c-11ed-b970-a44e31529b89",
    "exp": 1683567888
}