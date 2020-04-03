
export class CoolschoolProfile {
    intro: string;
    acitivies: Array<Activity>;
    sns: Array<Sns>;
    trainingCenters: Array<TrainingCenters>;
    trainings: Array<Training>;
    etc: Array<Etc>;
    teachMaterials: Array<TeachMaterials>;
    coolbooks: Array<CoolBook>;
    book: Array<Book>;
}


class Activity {
    contents: string;
    link: string;
}

class Sns {
    kind: string;
    address: string;
}

class TrainingCenters {
    code: string;
    name: string;
    url: string;
    logo: string;
}

class Training {
    center: string;
    course: string;
    address: string;
    image: string;
}

class Etc {
    subject: string;
    contents: string;
    address: string;
    image: string;
}

class TeachMaterials {
    subject: string;
    contents: string;
    address: string;
    image: string;
}

class CoolBook {
    TITLE: string;
    AUTHOR: string;
    SUMMARY: string;
    THUMBNAIL: string;
    SHORT_URL: string;
    VIEW_COUNT: number;
    LIKE_COUNT: number;
    COMMENT_COUNT: number;
    PUBLISHER: string;
    WRITER: string;
}

class Book {
    publisher: string;
    book: string;
    address: string;
    image: string;
}
