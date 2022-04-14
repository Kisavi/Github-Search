export class Repository {
    constructor(
        public repositoryName: string,
        public description: string,
        public lastUpdate: Date,
        public language: string,
        public star: string,
        public fork: string,
    ){}
}
