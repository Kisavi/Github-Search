export class Profile {
    constructor(
        public avatar_url: string,
        public name: string,
        public login: string,
        public bio: string,
        public followers: number,
        public following: number,
        public html_url: string,
    ) { }
}
