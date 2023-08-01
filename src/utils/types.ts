import type { NodeInput } from "gatsby";
import { Chapter, Course } from "../components/index.d";

interface IAsciinemaPageInput extends NodeInput {
    ID: string
    content: string
}

interface IChapterInput extends NodeInput, Chapter {

}

interface ICourseInput extends NodeInput, Course {

}


interface IChapterApiResponse {
    data: {
        result: {
            chapters: Array<Chapter>
        }
    }
}


export type { IAsciinemaPageInput, IChapterInput, ICourseInput };