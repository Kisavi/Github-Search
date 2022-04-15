export class Repository {
    constructor(
        public name: string,
        public description: string,
        public updated_at: Date,
        public language: string,
        public stargazers_count: string,
        public forks_count: string,
        public html_url: string,
    ){}
}
